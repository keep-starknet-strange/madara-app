#![allow(non_snake_case)]
#![feature(async_closure)]
#[macro_use]
extern crate lazy_static;
// import the prelude to get access to the `rsx!` macro and the `Scope` and `Element` types
use dioxus::prelude::*;
use starknet::providers::Provider;
use starknet::{
    core::types::{BlockId, BlockTag},
    providers::{jsonrpc::HttpTransport, AnyProvider, JsonRpcClient, SequencerGatewayProvider},
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
    let mut count = use_state(cx, || 0);

    render!(
        h1 { "High-Five counter: {count}" }
        button { onclick: move |_| {
            /*let provider = get_starknet_rpc_provider();
            let latest_block = provider
            .get_block_with_tx_hashes(BlockId::Tag(BlockTag::Latest))
            .await;
        println!("{latest_block:#?}");*/
            count += 1;
        }, "Up high!" }
        button { onclick: move |_| count -= 1, "Down low!" }
    )
}

fn get_default_starknet_rpc_url() -> Url {
    Url::parse("https://sharingan.madara.wtf").expect("Invalid Starknet RPC URL")
}

fn get_starknet_rpc_provider() -> JsonRpcClient<HttpTransport> {
    starknet_rpc_provider(get_default_starknet_rpc_url())
}

fn starknet_rpc_provider(rpc: Url) -> JsonRpcClient<HttpTransport> {
    JsonRpcClient::new(HttpTransport::new(rpc))
}
