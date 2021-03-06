import request from '@/services/request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getArtistList(limit, type) {
  return request({
    url: "/artist/list",
    params: {
      type,
      limit
    }
  })
}
