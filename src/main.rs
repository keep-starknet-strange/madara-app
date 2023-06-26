#![allow(non_snake_case)]
#![feature(async_closure)]
#[macro_use]
extern crate lazy_static;
// import the prelude to get access to the `rsx!` macro and the `Scope` and `Element` types
use dioxus::prelude::*;
use eyre::{eyre, Result};
use starknet::{core::types::BlockWithTxHashes, providers::Provider};
use starknet::{
    core::types::{BlockId, BlockTag, MaybePendingBlockWithTxHashes},
    providers::{jsonrpc::HttpTransport, JsonRpcClient},
};
use url::Url;

lazy_static! {
    static ref STARKNET_RPC_URL: Url =
        Url::parse("https://sharingan.madara.wtf").expect("Invalid Starknet RPC URL");
    static ref STARKNET_PROVIDER: JsonRpcClient<HttpTransport> =
        starknet_rpc_provider(STARKNET_RPC_URL.clone());
}

fn main() {
    // Launch the dioxus app in a webview.
    dioxus_desktop::launch(App);
}

// define a component that renders a div with the text "Hello, world!"
fn App(cx: Scope) -> Element {
    // Create a future that will fetch the latest block number from the Starknet RPC.
    let get_latest_block_future = use_future(cx, (), |_| async move { get_latest_block().await });

    // Get the latest block number from the future.
    let latest_block = get_latest_block_future
        .value()
        .map(|latest_block| latest_block.as_ref().unwrap());

    // Get the latest block number from the latest block.
    let latest_block_number = match latest_block {
        Some(latest_block) => latest_block.block_number,
        None => 0,
    };

    // Render the component.
    render!(
        head {
            // Import Tailwind CSS.
            link {
                rel: "stylesheet",
                href: "/public/tailwind.css"
            }
        },
        div {
            class: "text-3xl font-bold",
            "Madara Kit"
        }
        h2 { "Latest block number: {latest_block_number}" }
        button {
            class: "px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black",
            onclick: move |_| {
                get_latest_block_future.restart();
            },
            "Refresh",
        }
    )
}

async fn get_latest_block() -> Result<BlockWithTxHashes> {
    let latest_block = STARKNET_PROVIDER
        .get_block_with_tx_hashes(BlockId::Tag(BlockTag::Latest))
        .await?;
    match latest_block {
        MaybePendingBlockWithTxHashes::Block(block) => Ok(block),
        MaybePendingBlockWithTxHashes::PendingBlock(_block) => {
            Err(eyre!("pending block not supported"))
        }
    }
}

fn starknet_rpc_provider(rpc: Url) -> JsonRpcClient<HttpTransport> {
    JsonRpcClient::new(HttpTransport::new(rpc))
}
