import { Router } from 'express'

const dishShelfCallback = {
  searchCallback: {
    '250a312846d811e8a72860f6777c31cf': {
      "tmp_id": "6AA17",
      "default_shelf": null,
      "current_shelf": {
        id: '00e439d6-4f81-11e8-aadb-f23c91cdaa44',
        name: 'Cc36',
        shelf_type: '85e7f48a-a5ab-11e8-b030-f23c91cdaa44',
      },
      "status": null,
      "__str__": "CK黑素面短袖內衣(M) [6AA17]",
      "application": {
          "id": "866b96fa-e35a-4e96-b4ed-e239eae00cf5",
          "application": "單品"
      },
      "owner": null,
      "itemimage_set": [
        {
            "id": "13f8d53c9f8a11e895d1f23c91cdaa44",
            "img_id": "13f8d6ae9f8a11e895d1f23c91cdaa44",
            "image": "https://storage.googleapis.com/erp-content/media/item/250a312846d811e8a72860f6777c31cf/13f8d6ae9f8a11e895d1f23c91cdaa44.jpg",
            "bg_removed": false,
            "for_ootd": false,
            "item": "250a312846d811e8a72860f6777c31cf"
        }
      ]
    },
  },
  updateCallBack: {
    normalCase: 'success',
    failCase: 'fail',
  }
}

const dishRouter = Router({mergeParams: true})
dishRouter.route('/:itemID')
    .get((req, res) => {
      if (!dishShelfCallback.searchCallback[req.params.itemID]) {
        res.send('not good id')
        return
      }
      res.send(dishShelfCallback.searchCallback[req.params.itemID])
    })
    .put((req, res) => {
      if(req.body.current_shelf === '00e439d6-4f81-11e8-aadb-f23c91cdaa44'
      && req.body.present_shelf === '00e439d6-4f81-11e8-aadb-f23c91cdaa44') {
        res.json({end: 'success'})
        return
      }
      res.send('fail')
    })

export { dishRouter }