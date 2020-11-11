import React, { children } from 'react';
import S from '@sanity/desk-tool/structure-builder';

//Custom sidebar for store settings
const sidebar = () => {
    return S.list().title(`Steen's Beans`).items([
        //New subitem
        S.listItem()
            .title(`Home Page`)
            .icon(() => <strong>☕</strong>)
            .child(
                S.editor()
                    .schemaType('storeSettings')
                    .documentId('downtown')
            ),
        //Add the rest of doc items
        ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings'),
    ])
};

export default sidebar;
