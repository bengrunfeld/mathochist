// Enzyme setup
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


// Jest Fetch Mock setup
import jfm from 'jest-fetch-mock'

global.fetch = jfm