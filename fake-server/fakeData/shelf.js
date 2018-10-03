import { Router } from 'express'

const shelfCallback = {
  "00e439d6-4f81-11e8-aadb-f23c91cdaa44": {
    "id": "00e439d6-4f81-11e8-aadb-f23c91cdaa44",
    "name": "Cc16",
    "image": null,
    "region": "5265d4ba-4f7a-11e8-abfa-f23c91cdaa44",
    "shelf_type": "85e7f48a-a5ab-11e8-b030-f23c91cdaa44"
  },
  "0414c7fe-4f7e-11e8-aca2-f23c91cdaa44": {
    "id": "0414c7fe-4f7e-11e8-aca2-f23c91cdaa44",
    "name": "Cb24",
    "image": null,
    "region": "5265d4ba-4f7a-11e8-abfa-f23c91cdaa44",
    "shelf_type": "85e7f48a-a5ab-11e8-b030-f23c91cdaa44"
  },
}

const shelfRouter = Router({mergeParams: true})
shelfRouter.route('/:shelfID')
    .get((req, res) => {
      if (!shelfCallback[req.params.shelfID]) {
        res.send('not good id')
        return
      }
      res.send(shelfCallback[req.params.shelfID])
    })

export { shelfRouter }