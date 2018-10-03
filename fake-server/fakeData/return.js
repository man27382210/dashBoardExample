import { Router } from 'express'

const returnCallback = {
  searchCallback: {
    '250a312846d811e8a72860f6777c31cf': {
      "present_shelf": '00e439d6-4f81-11e8-aadb-f23c91cdaa44',
      "status": null,
      "__str__": "黑眼鏡 [V36]",
    },
  },
  updateCallBack: {
    normalCase: 'success',
    failCase: 'fail',
  }
}

const returnRouter = Router({mergeParams: true})
returnRouter.route('/:itemID')
    .get((req, res) => {
      if (!returnCallback.searchCallback[req.params.itemID]) {
        res.send('not good id')
        return
      }
      res.send(returnCallback.searchCallback[req.params.itemID])
    })
    .put((req, res) => {
      if(req.body.current_shelf === '00e439d6-4f81-11e8-aadb-f23c91cdaa44') {
        res.json({end: 'success'})
        return
      }
      res.send('fail')
    })

export { returnRouter }