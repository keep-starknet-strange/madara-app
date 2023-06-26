#![allow(non_snake_case)]
#![feature(async_closure)]
#[macro_use]
extern crate lazy_static;
// import the prelude to get access to the `rsx!` macro and the `Scope` and `Element` types
use dioxus::prelude::*;
use eyre::{eyre, Result};
use starknet::providers::Provider;
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
    // launch the dioxus app in a webview
    dioxus_desktop::launch(App);
}

// define a component that renders a div with the text "Hello, world!"
fn App(cx: Scope) -> Element {
    let get_latest_block_future = use_future(cx, (), |_| async move { get_latest_block().await });
    let latest_block = match get_latest_block_future.value() {
        Some(latest_block) => *latest_block.as_ref().unwrap(),
        None => 0_u64,
    };
    render!(
        h1 { "Madara Kit" }
        h2 { "Latest block: {latest_block}" }
    )
}

async fn get_latest_block() -> Result<u64> {
    let latest_block = STARKNET_PROVIDER
        .get_block_with_tx_hashes(BlockId::Tag(BlockTag::Latest))
        .await?;
    match latest_block {
        MaybePendingBlockWithTxHashes::Block(block) => Ok(block.block_number),
        MaybePendingBlockWithTxHashes::PendingBlock(_block) => {
            Err(eyre!("pending block not supported"))
        }
    }
}

fn starknet_rpc_provider(rpc: Url) -> JsonRpcClient<HttpTransport> {
    JsonRpcClient::new(HttpTransport::new(rpc))
}
