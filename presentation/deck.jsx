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
            WEB RTC
          </Heading>
          <Heading size={2} fit caps textColor="white" margin="-20px 0px">
            How WebRTC Works
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgImage={images.city.replace('/','')} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                What is WebRTC:
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Access to Audio, Video in JS</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Cross-Browser, No Plugins</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Collaboration between Google, Mozilla, etc.</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Major Parts:
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textColor="secondary">SIGNALING</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textColor="secondary">ICE, STUN, TURN</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textColor="secondary">WEB API</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Tons of Uses:
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">File Sharing</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Phone Calls</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Video Calls</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Screen Sharing</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Chat</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={54} textColor="secondary">Multiplayer Gaming</Text></Appear></ListItem>
            </List>
        </Slide>
      </Deck>
    )
  }
}
