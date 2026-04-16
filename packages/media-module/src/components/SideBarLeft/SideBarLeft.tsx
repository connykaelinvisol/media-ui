import React from 'react';

import { Column } from '@media-ui/core/src/components';
import { UploadButton } from '@media-ui/feature-asset-upload/src/components';
import { AssetCollectionTree } from '@media-ui/feature-asset-collections';
import { AssetSourceDescription, AssetSourceList } from '@media-ui/feature-asset-sources';

import classes from './SideBarLeft.module.css';

const SideBarLeft: React.FC = () => {
    const components = [AssetSourceList, AssetCollectionTree, AssetSourceDescription].filter(Boolean);

    return (
        <Column className={classes.nonScrollableColumn}>
            <UploadButton />
            <div className={classes.scrollableContent}>
                {components.map((Component, index) => (
                    <Component key={index + 1} />
                ))}
            </div>
        </Column>
    );
};

export default React.memo(SideBarLeft);
