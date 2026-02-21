import { mount } from 'svelte'
import './app.css'
import CounterLearnSvelte from "./lib/CounterLearn.svelte"

const app = mount(CounterLearnSvelte, {
  target: document.getElementById('app'),
})

export default app
