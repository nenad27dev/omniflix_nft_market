import { config } from '../config';

const variables = {
    en: {
        connect_keplr: 'Connect with Keplr',

        // navbar
        search: 'Search',
        home: 'Home',
        watch: 'Watch',
        explore: 'Explore',
        market_place: 'MarketPlace',
        activity: 'Activity',
        create: 'Create',
        connect: 'Connect',
        connecting: 'Connecting',
        items: 'Items',

        // Side Panel
        my_account: 'My Account',
        account_overview: 'Account Overview',
        goto_account: 'Goto Account',
        connected_with_keplr: 'Connected with Keplr',
        disconnect: 'Disconnect',
        recent_offers: 'Recent Offers',
        see_all: 'See All',
        offer_made: 'Offer Made',
        recently_collected: 'Recently Collected',
        recently_minted: 'Recently Minted',
        recent_activity: 'Recent Activity',
        recent_collections: 'Recent Collections',
        recent_nfts: 'Recent NFTs',
        sent: 'Sent',
        buy: 'Buy',
        claim_tokens: 'Claim Tokens',
        claim: 'Claim',

        // faucet
        faucet: 'FAUCET',
        connect_account: 'Connect Account',
        congrats: 'Congratulations!',
        claimed_tokens: 'You have claimed all your test tokens',
        deposit_ibc: 'Deposit via IBC',
        chain: 'Chain',
        claimed: 'Claimed',
        claim_test_tokens: 'Claim test Tokens',
        processing: 'Processing',

        // MarketPlace
        results: 'Results',
        creator: 'Creator',
        bid_price: 'Bid Price',
        sort_by: 'Sort By',
        owner: 'Owner',
        buy_now: 'Buy Now',
        collect: 'Collect',

        // Filters
        filters: 'Filters',
        status: 'Status',
        price_range: 'Price Range',
        select_token: '-Select Coin-',
        min_range: 'Min(00)',
        to: 'To',
        max_range: 'Min(50k)',
        genre: 'Genre',
        collections: 'Collections',
        chains: 'Chains',
        on_sale_in: 'On-Sale In',
        types: 'Types',

        // My Account
        copied: 'copied!',
        copy_to_clipboard: 'copy to clipboard',
        collected: 'Collected',
        nfts: 'NFTs',
        minted: 'Minted',
        offers: 'Offers',
        ibc_tokens: 'IBC Tokens',
        flix: 'FLIX',
        not_listed: 'Not Listed',
        collection: 'Collection',
        listed: 'Listed',

        // Watch
        continue_watching: 'Continue Watching',
        trending: 'Trending',
        most_viewed: 'Most Viewed',
        suggested: 'Suggested',
        top_categories: 'Top Categories',
        button: 'Button',
        top_collections: 'Top Collection',
        live_auctions: 'Live auctions',
        top_selling: 'Top Selling',
        price: 'Price',
        hot_collections: 'Hot Collection',

        deposit_ibc_asset: 'Deposit IBC Asset',
        ibc_transfer: 'IBC Transfer',
        from: 'From',
        amount_deposit: 'Amount to Deposit',
        available: 'Available',
        max: 'Max',
        deposit: 'Deposit',

        withdraw_ibc_asset: 'Withdraw IBC Asset',
        ibc_withdraw: 'IBC WithDraw',
        amount_withdraw: 'Amount to Withdraw',
        withdraw: 'Withdraw',
        approval_pending: 'Approval Pending',
        transfer: 'Transfer',
        sell: 'Sell',
        list: 'List',
        delist: 'Delist',
        enter_recipent_address: 'Enter your recipent\'s account address',
        cancel: 'Cancel',
        confirm: 'Confirm',
        asset_transfer_success: 'Asset Transfer Successful',
        asset_transfer_fail: 'Asset Transfer Failed',
        close_window: 'Close Window',
        transaction_hash: 'Transaction Hash',

        listing_type: 'Listing Type',
        listing_id: 'Listing ID',
        timed_auction: 'Timed Auction',
        coming_soon: 'coming soon',
        fixed_price: 'Fixed Price',
        listing_price: 'Listing Price',
        asset_listed_successfully: 'Asset Listed Successfully',
        cancel_listing: 'Cancel Listing',
        asset_not_listed: 'Asset not Listed',
        id: 'ID',
        type: 'Type',
        split_info: 'Split Info',
        split_info_info: 'Sum of all splits cannot exceed 100%',
        enter_split_address: 'Enter Account Address',
        enter_split_percentage: 'Enter split share %',
        total_sale_breakdown: 'Total Sale Breakdown',
        royalty_share: 'Royalty Share',
        splits: 'Splits',
        market_place_share: 'Marketplace Share',
        invalid_address: 'Invalid Address',
        creators_royalty: 'Creators Royalty',
        sale_breakdown: 'Sale Breakdown',

        listed_price: 'Listed Price',
        selling_type: 'Selling Type',
        selling_id: 'Selling ID',
        sell_price: 'Sell Price',
        asset_successfully_removed_from_list: 'Asset Successfully removed from Listing',
        auctions_cancelled_successfully: 'Auctions Cancelled Successfully',
        failed_to_remove_asset: 'Failed to Remove Asset from Listing',

        view_schema_json: 'View JSON Schema',
        json_schema_properties: 'JSON Schema Properties',
        properties: 'Properties',
        view_json_file: 'View JSON File',

        total_traded_value: 'Total Traded Volume',
        my_total_traded_value: 'My Total Traded Volume (Buy Activity)',
        download_file: 'Download file',

        nft_purchase_success: 'Congrats on your successful NFT purchase!',
        view_nft: 'View NFT',
        check_later: 'Transaction is in process. check after some time.',
        category: 'Category',
        tags: 'Tags',

        create_listing: 'Create Listing',
        create_auction: 'Create Auction',
        confirm_listing: 'Confirm Listing',
        confirm_auction: 'Confirm Auction',
        list_nft_confirmation: 'List NFT Confirmation',
        auction_confirmation: 'Timed Auction Confirmation',
        message_type: 'Message Type',
        nft_id: 'NFT ID',
        denom_id: 'Denom ID',
        listed_type: 'Listed Type',
        de_listing_nft_confirmation: 'De-Listing NFT Confirmation',
        confirm_de_listing: 'Confirm De-Listing',
        transfer_nft_confirmation: 'Transfer NFT Confirmation',
        confirm_transfer: 'Confirm Transfer',
        nft_image_url: 'NFT Image URL',
        royalties: 'Royalties',
        extensibility: 'Extensibility',
        schema: 'Schema',
        denom_symbol: 'Denom Symbol',
        nsfw: 'NSFW',
        transferability: 'Transferability',
        confirm_ibc_deposit_details: 'Confirm IBC Deposit Details',
        confirm_ibc_withdraw_details: 'Confirm IBC Withdraw Details',
        selected_token: 'Selected Token',

        explore_head: 'Explore & collect from Genesis Creators',
        explore_launchpad: 'Collections up for minting',
        recently_listed: 'Recently Listed',
        explore_more: 'Explore more',
        list_price: 'List Price',
        footer_content1: 'want to manage, distribute & monetize your work of art?',
        footer_content2: 'Interoperable NFT network & infrastructure for creators, sovereign communities & DAOs. Do more with your NFTs!',
        get_in_touch: 'Get in Touch',
        genesis_creator: 'Genesis Creator Drop',
        view_details: 'View Details',
        close: 'Close',
        floor_price: 'Floor Price',

        done: 'Done',
        fee_grant_allowance: 'Fee Grant Allowance',
        request_fee_grant: 'Request Fee Grant',
        allowance_received: 'Fee Allowance Received',
        allowance: 'Allowance',
        fee_grant_content: 'Collectors, request for a fee grant allowance on OmniFlix Market to collect, transfer, list & burn NFTs. FLIX tokens will not be visible in your account but your transaction fees will be paid by the app.',

        ledger_note: 'Note: Ledger is not supported. Please do not initiate transactions using Ledger. Support will roll out soon',
        wallet_connect_note: 'Note: Wallet connect deposits is not supported',
        congratulations: 'Congratulations',

        // Campaign
        verify_twitter_account: 'Verify Twitter Account',
        verify_twitter_account_to_request: 'Verify Twitter Account To Request fee grant',
        verify_twitter: 'Verify Twitter',
        verify_twitter_info: 'Twitter verification is needed to Mint Tweet as NFTs. You can verify Twitter account from the account page.',
        verify_twitter_error: 'Twitter Account is not verified',
        verified: 'Verified',
        next: 'Next',
        expiry: 'Expiry',
        fee_grant_expired: 'Fee Grant allowance Expired',

        share_tweet: 'Share Tweet',
        share_tweet_info: 'Copy & Paste the below text and tweet from your account. You will have to enter the Tweet URL in next step',
        verify_tweet: 'Verify Tweet',
        enter_twitter_username: 'Enter your Twitter username',
        enter_tweet_url: 'Enter tweet URL for verification',
        submit: 'Submit',
        copy_text: 'Copy Text',
        twitter_verified: 'Your Twitter Account has been verified.',
        copy_right: 'This collection is flagged for IP or copyright infringement as reported\n' +
            'by the majority in the community. Please collect at your own risk.',
        cr_collection_card: 'flagged for IP or copyright infringement',
        ip_tooltip: 'IP or copyright infringement',
        ibc_deprecated_text: 'will soon be deprecated. Do withdraw your funds and De-list your NFTs from',
        delist_ibc_deprecated: 'Delist your NFTs from “ATOM/CH-0" as "ATOM/CH-0" will soon be deprecated. You can List NFT again on "ATOM" right away.',
        mint: 'Mint',
        min_bid_price: 'Min Bid Price',
        bid_increment_per: 'Bids Increment Percentage',
        whitelist: 'Whitelist',
        auction_start_time: 'Auction Start Time',
        auction_end_time: 'Auction End Time',
        optional: 'Optional',
        start_time: 'Start Time',
        end_time: 'End Time',
        helper_text: 'Helper Text',
        my_nfts: 'My NFTs',

        // place bid
        place_bid: 'Place Bid',
        enter_bid_price: 'Enter Bid Price',
        bid: 'Bid',
        bid_requested_successfully: 'Bid Requested Successfully',
        bid_requested_failed: 'Failed to Bid Requested',
        bid_amount: 'BID Amount',

        auctions: 'Auctions',
        launchpad: 'Launchpad',
        last_bid_price: 'Last Bid Price',
        min_bid: 'Min Bid',
        ends_in: 'Ends In',
        starts_in: 'Starts In',
        live_in: 'Live in',
        live: 'Live',
        collect_now: 'Collect Now',
        auction_go_live: 'Auction will go Live in',
        auction_ends_in: 'Auction ends in',
        auction_is_not_live: 'Auction is not Live',
        owner_of_nft: 'You are the owner of this NFT',
        account_not_whitelisted: 'Your Account is Not WhiteListed',
        cancel_auction_confirmation: 'Cancel Auction Confirmation',
        cancel_auction: 'Cancel Auction',
        auction_types: 'Auction Types',
        not_whitelisted: 'Your account is not whitelisted',

        burn: 'Burn',
        more_options: 'More options',
        agree_to_delete: 'Do you agree to delete the NFT?',
        enter_last_characters: 'Enter last 4 characters of the NFT ID',
        asset_deleted: 'Asset Deleted',
        asset_burn_failed: 'Asset Burn Failed',
        okay: 'Okay',

        // connect dialog
        connect_wallet: 'Connect Wallet',
        keplr_wallet: 'Keplr Wallet',
        wallet_connect: 'Wallet Connect',
        chain_not_supported: `${config.CHAIN_ID} are not currently supported chain`,
    },
};

export default variables;
