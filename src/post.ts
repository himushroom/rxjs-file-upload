import { Observable } from 'rxjs/Observable'
import { AjaxRequest, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable'

import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map'

interface PostConfig {
  url: string
  body?: {}
  headers?: {}
  progressSubscriber?: AjaxRequest['progressSubscriber']
}

export const post = ({
  url,
  body,
  headers,
  progressSubscriber
}: PostConfig) => {
  return Observable.ajax({
    url,
    body,
    headers,
    method: 'POST',
    crossDomain: true,
    progressSubscriber
  })
  .map((r: AjaxResponse) => r.response)
}
