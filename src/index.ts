/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import isEven from 'is-even'
import isOdd from 'is-odd'
import { Router } from 'itty-router'

const router = Router()

router.get('/is-even/:num', ({ params }) => {
  if (typeof params === 'undefined') {
    return new Response(
      JSON.stringify({
        result: null,
        err: true
      }),
      { status: 500 }
    )
  } else {
    return new Response(
      JSON.stringify({
        result: isEven(params.num),
        err: false
      })
    )
  }
})

router.get('/is-odd/:num', ({ params }) => {
  if (typeof params === 'undefined') {
    return new Response(
      JSON.stringify({
        result: null,
        err: true
      }),
      { status: 500 }
    )
  } else {
    return new Response(
      JSON.stringify({
        result: isOdd(params.num),
        err: false
      })
    )
  }
})

router.all('*', () => new Response('Not Found', { status: 404 }))

export default {
  fetch: router.handle
}
