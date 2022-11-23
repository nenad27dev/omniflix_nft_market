import React, { useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import variables from '../../../utils/variables';
import downArrow from '../../../assets/explore/expand more.svg';
import { fetchCollectionAuctions, setCollectionAuctionsSort } from '../../../actions/collections';
import { withRouter } from 'react-router';
import SortIcon from '@mui/icons-material/Sort';
import { DEFAULT_LIMIT, DEFAULT_SKIP } from '../../../config';

const SortByPopover = (props) => {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = (sortBy, order) => {
        const route = props.match && props.match.params && props.match.params.id;
        props.setCollectionAuctionsSort(sortBy, order);
        if (props.denomValue && props.denomValue.size) {
            props.fetchCollectionAuctions(route, DEFAULT_SKIP, DEFAULT_LIMIT, [...props.denomValue], null, null, props.auctionsTypeCA, props.address, sortBy, order, props.auctionsSearch);
        } else if (props.priceRangeValue && props.priceRangeValue.network &&
            props.priceRange && props.priceRange.length &&
            ((props.priceRange[0] > 0) || (props.priceRange[1] < 50000))) {
            const decimals = props.priceRangeValue && props.priceRangeValue.network &&
                (props.priceRangeValue.network.COIN_DECIMALS || props.priceRangeValue.network.decimals);
            const minValue = props.priceRange[0] * (10 ** decimals);
            const maxValue = props.priceRange[1] * (10 ** decimals);

            props.fetchCollectionAuctions(route, DEFAULT_SKIP, DEFAULT_LIMIT, [props.priceRangeValue.ibc_denom_hash || props.priceRangeValue.value], minValue, maxValue, props.auctionsTypeCA, props.address, sortBy, order, props.auctionsSearch);
        } else {
            props.fetchCollectionAuctions(route, DEFAULT_SKIP, DEFAULT_LIMIT, null, null, null, props.auctionsTypeCA, props.address, sortBy, order, props.auctionsSearch);
        }

        setAnchorEl(null);
        window.scroll(0, 0);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div
                aria-describedby={id}
                className="icon_button"
                onClick={handleClick}>
                <SortIcon className="sort_icon"/>
                {props.sortBy === 'created_at'
                    ? <span> Recently Listed</span>
                    : props.sortBy === 'price.amount' && props.order === 'asc'
                        ? <span>Price : Low to high</span>
                        : props.sortBy === 'price.amount' && props.order === 'desc'
                            ? <span> Price : High to low</span>
                            : <span>{variables[props.lang]['sort_by']}</span>}
                <img alt="icon" src={downArrow}/>
            </div>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                className="profile_popover sort_by"
                id={id}
                open={open}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}>
                <Typography className="tab" onClick={() => handleSort('created_at')}>
                    <Button>
                        Recently Listed
                    </Button>
                </Typography>
                <Typography className="tab" onClick={() => handleSort('price.amount', 'asc')}>
                    <Button>
                        Price: Low to high
                    </Button>
                </Typography>
                <Typography className="tab" onClick={() => handleSort('price.amount', 'desc')}>
                    <Button>
                        Price: High to low
                    </Button>
                </Typography>
            </Popover>
        </>
    );
};

SortByPopover.propTypes = {
    address: PropTypes.string.isRequired,
    auctionsTypeCA: PropTypes.string.isRequired,
    denomValue: PropTypes.object.isRequired,
    fetchCollectionAuctions: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    priceRange: PropTypes.array.isRequired,
    priceRangeValue: PropTypes.object.isRequired,
    setCollectionAuctionsSort: PropTypes.func.isRequired,
    auctionsLimit: PropTypes.number,
    auctionsSearch: PropTypes.string,
    auctionsSkip: PropTypes.number,
    order: PropTypes.string,
    sortBy: PropTypes.string,
};

const stateToProps = (state) => {
    return {
        address: state.account.wallet.connection.address,
        auctionsSkip: state.collection.auctions.skip,
        auctionsLimit: state.collection.auctions.limit,
        auctionsSearch: state.collection.collectionAuctionSearch.value,
        denomValue: state.auctions.filters.onSaleInCA.value,
        lang: state.language,

        priceRangeValue: state.auctions.filters.priceRangeCA.value,
        priceRange: state.auctions.filters.priceRangeCA.range,
        auctionsTypeCA: state.auctions.filters.auctionsTypeCA,

        sortBy: state.collection.collectionAuctionsSort.sortBy,
        order: state.collection.collectionAuctionsSort.order,
    };
};

const actionToProps = {
    setCollectionAuctionsSort,
    fetchCollectionAuctions,
};

export default withRouter(connect(stateToProps, actionToProps)(SortByPopover));
