import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideActiveCard } from '../../actions/explore';
import { hideFilters } from '../../actions/filters';
import { withRouter } from 'react-router';
import variables from '../../utils/variables';
import thumbnail from '../../assets/collections/thumbnail.svg';
import NoData from '../../components/NoData';
import ImageOnLoad from '../../components/ImageOnLoad/BackgroundImage';
import { Tooltip } from '@mui/material';
import { getAssetType, getAssetTypeExtension } from '../../utils/strings';
import VideoOnLoad from '../../components/ImageOnLoad/VideoOnLoad';

const CollectionsList = (props) => {
    const { hideActiveCard } = props;

    useEffect(() => {
        hideActiveCard();
    }, [hideActiveCard]);

    const handleReDirect = (event) => {
        event.stopPropagation();
        if (props.showActive) {
            props.hideActiveCard();
        }
    };

    return (
        <>
            {props.collections && props.collections.length > 0
                ? props.collections.map((item) => {
                    const mediaType = item && item.media_type;

                    return (
                        <div
                            key={item.id}
                            className="list_page">
                            <a
                                href={'/collection/' + (item && item.id)}
                                rel="no-refresh"
                                onClick={handleReDirect}>
                                {mediaType &&
                                getAssetType(mediaType) === 'video'
                                    ? <div className="inline_video_section">
                                        <VideoOnLoad
                                            src={item && item.preview_uri}
                                            type={mediaType}/>
                                    </div>
                                    : mediaType &&
                                    getAssetType(mediaType) === 'image' && getAssetTypeExtension(mediaType) === 'gif'
                                        ? <ImageOnLoad
                                            className="list_section2"
                                            src={item && item.preview_uri ? item.preview_uri : thumbnail}/>
                                        : <ImageOnLoad
                                            cdn={item && item.cloudflare_cdn && item.cloudflare_cdn.variants}
                                            className="list_section2"
                                            src={item && item.preview_uri ? item.preview_uri : thumbnail}/>}
                                <div className="row">
                                    <div className="list_section3">
                                        <div className="list_section3_div">
                                            <span>
                                                {variables[props.lang].collection}
                                            </span>
                                        </div>
                                        <Tooltip title={item.name + ' | ' + item.symbol}>
                                            <span className="list_section3_span">
                                                {item && (item.name || item.symbol)}
                                            </span>
                                        </Tooltip>
                                    </div>
                                    <div className="list_section3">
                                        <div className="list_section3_div">
                                            <span>
                                                {variables[props.lang].nfts}
                                            </span>
                                        </div>
                                        {item.owned_nfts
                                            ? <span className="list_section3_span">
                                                {item.owned_nfts ? item.owned_nfts : 0}
                                                /{item.total_nfts}
                                            </span>
                                            : <span className="list_section3_span">
                                                {item.total_nfts}
                                            </span>}
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                }) : <NoData/>}
        </>
    );
};

CollectionsList.propTypes = {
    collections: PropTypes.array.isRequired,
    collectionsTotal: PropTypes.number.isRequired,
    hideActiveCard: PropTypes.func.isRequired,
    hideFilters: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    lang: PropTypes.string.isRequired,
    showActive: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
    return {
        lang: state.language,
        collections: state.marketplace.collections.result,
        collectionsTotal: state.marketplace.collections.total,
        showActive: state.explore.activeCard.open,
    };
};

const actionToProps = {
    hideFilters,
    hideActiveCard,
};

export default withRouter(connect(stateToProps, actionToProps)(CollectionsList));
