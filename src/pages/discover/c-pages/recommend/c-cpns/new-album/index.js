import React, { memo } from 'react'

import { NewAlbumWrapper } from './style';
import ZCThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function ZCNewAlbum() {
  return (
    <NewAlbumWrapper>
      <ZCThemeHeaderRCM title="新碟上架" path="/discover/album"/>
    </NewAlbumWrapper>
  )
})
