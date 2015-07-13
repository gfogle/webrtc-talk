import React from 'react/addons';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './interactive';

const images = {
  city: require('./city.jpg'),
  kat: require('./kat.png'),
  logo: require('./formidable-logo.svg'),
  rccw: require('./rccw.png'),
  vdom1: require('./vdom1.png'),
  self: require('./self.png'),
  mount1: require('./mount1.png'),
  mount2: require('./mount2.png'),
  mount3: require('./mount3.png'),
  mount4: require('./mount4.png'),
  mount5: require('./mount5.png'),
  mount6: require('./mount6.png'),
  mount7: require('./mount7.png'),
  mount8: require('./mount8.png'),
  state1: require('./state1.png'),
  state2: require('./state2.png'),
  state3: require('./state3.png'),
  state4: require('./state4.png'),
  state5: require('./state5.png'),
  state6: require('./state6.png'),
  state7: require('./state7.png'),
  props: require('./props.png')
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['zoom','slide']} transitionDuration={800}>
        <Slide transition={['zoom']} bgColor="code">
          <Heading size={1} fit caps textColor="secondary">
            Virtual DOM
          </Heading>
          <Heading size={2} fit caps textColor="white" margin="-20px 0px">
            How React implements Virtual DOM
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={2} caps fit textColor="white">
              React has 154 modules. We'll ~cover ~30
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom','slide']} bgColor="black">
          <Image src={images.kat.replace('/','')} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="white">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <List fit>
              <ListItem caps bold textColor="white"><Appear><Text textColor="white">MOUNTING</Text></Appear></ListItem>
              <ListItem caps bold textColor="teal"><Appear><Text textColor="teal">SET STATE</Text></Appear></ListItem>
              <ListItem caps bold textColor="secondary"><Appear><Text textColor="secondary">PROPS</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textColor="primary">PERFORMANCE</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./hello.world")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              Let's Talk About Mounting
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.rccw.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="white">
            <Image src={images.vdom1.replace('/','')} margin="0px auto 40px" height="493px"/>
            <Heading size={2} textColor="black">
              root react object
            </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="white">
            <Image src={images.self.replace('/','')} margin="0px auto 40px" height="493px"/>
            <Heading size={2} fit textColor="black">
              self referenced object
            </Heading>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              How Mounting Is Implemented
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.mount1.replace('/','')} margin="0px auto 40px" height="393px"/>
              <Heading size={5} fill textColor="white">
                React.render is alias for ReactMount.render
              </Heading>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.mount2.replace('/','')} margin="0px auto 40px" height="493px"/>
          <Heading size={5} fill textColor="white">
            ReactMount.render is public method for _renderNewRootComponent
          </Heading>
          <Appear>
              <Heading size={5} fill textColor="secondary">
                _renderNewRootComponent is the mount logic
              </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.mount3.replace('/','')} margin="0px auto 40px" height="493px"/>
          <Heading size={5} fill textColor="white">
            Instantiate is an exposed function module
          </Heading>
          <Appear>
              <Heading size={5} fill textColor="secondary">
                ReactCompositeComponentWrapper is a newly-created function in Instantiate
              </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.mount4.replace('/','')} margin="0px auto 40px" height="493px"/>
          <Appear>
              <Heading size={5} fill textColor="white">
                creating the VDom is just array.push
              </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.mount5.replace('/','')} margin="0px auto 40px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    1st time batch... semaphore lock w/ callbacks
                  </Heading>
              </Appear>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    2nd time batch... callbacks
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.mount6.replace('/','')} margin="0px auto 40px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    MountComponent: traverse components to render HTML & registers events.
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.mount7.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.mount8.replace('/','')} margin="0px 20px 20px -80px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    And now we've mounted and have a UI
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              what about set state
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.state1.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.state2.replace('/','')} margin="0px auto 40px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    Enqueuing is just to array.push on dirty
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.state3.replace('/','')} margin="0px auto 40px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    batching updates -> ReactReconciler.performUpdateIfNecessary
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.state4.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.state5.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.state6.replace('/','')} margin="0px auto 40px" height="593px"/>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Image src={images.state7.replace('/','')} margin="0px 20px 20px -120px" height="493px"/>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              are props changes automatic
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide', 'fade']} bgColor="primary">
          <Image src={images.props.replace('/','')} margin="0px 20px 20px -140px" height="493px"/>
              <Appear>
                  <Heading size={5} fill textColor="white">
                    sometimes... i think
                  </Heading>
              </Appear>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              is there a performance impact?.
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="white">
              Yes.
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="white">3 improvements</Heading>
          <Layout>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="code" margin={10}>
                Use Keys
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="code" margin={10}>
                Should Component Update
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="code" margin={10}>
                !Styles in Props
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps fit textColor="white">Tradeoffs?</Heading>
          <Layout>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="code" margin={10}>
                appeasing react
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps textColor="secondary" bgColor="code" margin={10}>
                components++++
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="code">
          <Heading size={1} fit caps textColor="white">
            AeroTwist Blogged About Perf!
          </Heading>
          <Link href="https://aerotwist.com/blog/react-plus-performance-equals-what/">
            <Text bold caps textColor="secondary">AeroTwist Blog</Text>
          </Link>
        </Slide>
      </Deck>
    )
  }
}
