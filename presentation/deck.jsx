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
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Built-in Access to Audio, Video in Browser</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Access via standard JS APIs</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Cross-Browser, No Plugins</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Collaboration (sorta) between Google, Mozilla, Microsoft, etc.</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"http://iswebrtcreadyyet.com"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Tons of Uses:
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">File Sharing</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Phone Calls</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Video Calls</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Screen Sharing</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Chat</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Multiplayer Gaming</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Major Parts:
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={72} textColor="secondary">SIGNALING</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={72} textColor="secondary">ICE, STUN, TURN</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={72} textColor="secondary">WEB API</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Signaling
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Clients do a "handshake" with central server</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Server introduces a peer to all other peers</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Signaling server isnt in the spec</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">WebRTC doesnt care about transport protocol</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">HTTP, XHR Polling, XMPP, SIP, websockets</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"https://github.com/andyet/signalmaster"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Wait, we need servers?
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Network Address Translation (NAT)
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">ISP's divide the world into internet networks</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Each network has an exposed public IP Address(es)</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Internally, those networks have private IPs</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Session Traversal Utilities for NAT (STUN)
              </Heading>
            </Appear>
            <List fit>
                <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"http://www.whatsmyip.org/"</Text></Appear></ListItem>
                <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Translate private IPs to public IPs</Text></Appear></ListItem>
                <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"Hole Punching" in NAT firewalls</Text></Appear></ListItem>
                <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Doesnt solve DHCP, etc.</Text></Appear></ListItem>
                <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"https://github.com/enobufs/stun"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Traversal for Using Relays around NAT (TURN)
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Circumvent NAT connections via intermediary</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Intermediary becomes a relay server</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">So now we've abandoned peer-to-peer(P2P)</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"http://numb.viagenie.ca/","https://github.com/tony2001/rfc5766-turn-server"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                If STUN fails, we turn to TURN... but in a new session
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Interactive Connectivity Establishment (ICE)
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Allows multi-valued IPs to be used between peers</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">ICE trickling allows connection options to trickle in and renegotiate</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Clients can send / receive data on separate channels</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Thats infrastructure, now lets talk about APIs
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                3 web apis
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Media Stream</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">RTC PeerConnection</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">RTC DataChannel</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Media stream
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">getUserMedia()</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Media Stream contains Media Tracks that contain Channels</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Tracks manipulate: start, stop, etc.</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Thats the media, now we need a connection
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                RTC Peer Connection
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Create Connection Objects</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Listen For ICE</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Send SDP Offers ("https://webrtchacks.com/sdp-anatomy/")</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Establish Connection</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Demo!
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                chrome://webrtc-internals
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Thats the APIs, lets connect peers
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./navigator.polyfill")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./get.media2")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./create.connection")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./create.answer")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./on.answer")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./the.server")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Demo2!
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                RTC DataChannel
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Fast, Efficient data sharing</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Similar to web sockets API</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Datagram Transport Layer Security (DTLS)</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Congestion Control</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"https://webrtc.github.io/samples/src/content/datachannel/basic/"</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"https://github.com/samdutton/simpl/tree/master/rtcdatachannel"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./create.channel")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./answer.channel")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw!./channel.messaging")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Demo3!
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Security
              </Heading>
            </Appear>
            <List fit>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Encryption is mandatory in webRTC</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">Datagram Transport Layer Security (DTLS)</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">DTLS is a derivative of SSL</Text></Appear></ListItem>
              <ListItem caps bold textColor="primary"><Appear><Text textSize={40} textColor="secondary">"http://wiki.wireshark.org/DTLS"</Text></Appear></ListItem>
            </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Questions?
              </Heading>
            </Appear>
        </Slide>
      </Deck>
    )
  }
}
