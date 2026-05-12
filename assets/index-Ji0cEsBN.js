import{d9 as R,cU as C,da as W,db as U,dc as k,cT as u,dd as $,de as P,df as d,dg as j,cY as p,dh as b,di as V,dj as D,dk as F,cQ as H,cR as v,cX as O,d4 as T,cS as _,cW as g,dl as h,d1 as A,d3 as x,dm as B,dn as Q}from"./index-BngwTdNN.js";import{dp as re}from"./index-BngwTdNN.js";const o=k({status:"uninitialized"}),l={state:o,subscribeKey(n,e){return U(o,n,e)},subscribe(n){return W(o,()=>n(o))},_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(n){const t=await this._getClient().getNonce(n);return this.setNonce(t),t},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(n){const t=this._getClient().createMessage(n);return this.setMessage(t),t},async verifyMessage(n){return await this._getClient().verifyMessage(n)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const n=this._getClient();await n.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=n.onSignOut)==null||e.call(n)},onSignIn(n){var t;const e=this._getClient();(t=e.onSignIn)==null||t.call(e,n)},onSignOut(){var e;const n=this._getClient();(e=n.onSignOut)==null||e.call(n)},setSIWEClient(n){o._client=R(n),o.status="ready",C.setIsSiweEnabled(n.options.enabled)},setNonce(n){o.nonce=n},setStatus(n){o.status=n},setMessage(n){o.message=n},setSession(n){o.session=n,o.status=n?"success":"ready"}},N={FIVE_MINUTES_IN_MS:3e5};class z{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:i=N.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:a=N.FIVE_MINUTES_IN_MS,signOutOnAccountChange:s=!0,signOutOnDisconnect:r=!0,signOutOnNetworkChange:c=!0,...y}=e;this.options={enabled:t,nonceRefetchIntervalMs:i,sessionRefetchIntervalMs:a,signOutOnDisconnect:r,signOutOnAccountChange:s,signOutOnNetworkChange:c},this.methods=y}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){var e,t;return await((t=(e=this.methods).getMessageParams)==null?void 0:t.call(e))||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){var E,I;if(!l.state._client)throw new Error("SIWE client needs to be initialized before calling signIn");const e=u.state.address,t=await this.methods.getNonce(e);if(!e)throw new Error("An address is required to create a SIWE message.");const i=$.getNetworkProp("caipNetwork");if(!(i!=null&&i.id))throw new Error("A chainId is required to create a SIWE message.");const a=P.caipNetworkIdToNumber(i.id);if(!a)throw new Error("A chainId is required to create a SIWE message.");const s=(E=l.state._client)==null?void 0:E.options.signOutOnNetworkChange;s&&(l.state._client.options.signOutOnNetworkChange=!1,await this.signOut()),await d.switchActiveNetwork(i),s&&(l.state._client.options.signOutOnNetworkChange=!0);const r=await((I=this.getMessageParams)==null?void 0:I.call(this)),c=this.methods.createMessage({address:`eip155:${a}:${e}`,chainId:a,nonce:t,version:"1",iat:(r==null?void 0:r.iat)||new Date().toISOString(),...r});j.getConnectedConnector()==="AUTH"&&p.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){p.replace("ConnectingSiwe")}});const M=await b.signMessage(c);if(!await this.methods.verifyMessage({message:c,signature:M}))throw new Error("Error verifying SIWE signature");const f=await this.methods.getSession();if(!f)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(f),V.navigateAfterNetworkSwitch(),f}async signOut(){var e,t;return(t=(e=this.methods).onSignOut)==null||t.call(e),this.methods.signOut()}}const Y=/0x[a-fA-F0-9]{40}/u,q=/Chain ID: (?<temp1>\d+)/u;function J(n){var e;return((e=n.match(Y))==null?void 0:e[0])||""}function Z(n){var e;return`eip155:${((e=n.match(q))==null?void 0:e[1])||1}`}async function ee({address:n,message:e,signature:t,chainId:i,projectId:a}){let s=D(n,e,t);return s||(s=await F(n,e,t,i,a)),s}const K=H`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var L=function(n,e,t,i){var a=arguments.length,s=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(s=(a<3?r(s):a>3?r(e,t,s):r(e,t))||s);return a>3&&s&&Object.defineProperty(e,t,s),s};let S=class extends v{constructor(){var e,t;super(...arguments),this.dappImageUrl=(e=C.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(t=u.state.connectedWalletInfo)==null?void 0:t.icon}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return O`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};S.styles=K;S=L([T("w3m-connecting-siwe")],S);var m=function(n,e,t,i){var a=arguments.length,s=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(s=(a<3?r(s):a>3?r(e,t,s):r(e,t))||s);return a>3&&s&&Object.defineProperty(e,t,s),s};let w=class extends v{constructor(){var e;super(...arguments),this.dappName=(e=C.state.metadata)==null?void 0:e.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),O`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){l.state.session&&_.close()}async onSign(){var e,t,i;this.isSigning=!0,g.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((e=d.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:u.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}});try{l.setStatus("loading");const a=await l.signIn();return l.setStatus("success"),g.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((t=d.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:u.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}}),a}catch{const r=u.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT;return r?A.showError("This application might not support Smart Accounts"):A.showError("Signature declined"),l.setStatus("error"),g.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((i=d.state.caipNetwork)==null?void 0:i.id)||"",isSmartAccount:r}})}finally{this.isSigning=!1}}async onCancel(){var t;this.isCancelling=!0,u.state.isConnected?(await b.disconnect(),_.close()):p.push("Connect"),this.isCancelling=!1,g.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((t=d.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:u.state.preferredAccountType===h.ACCOUNT_TYPES.SMART_ACCOUNT}})}};m([x()],w.prototype,"isSigning",void 0);m([x()],w.prototype,"isCancelling",void 0);w=m([T("w3m-connecting-siwe-view")],w);function se(n){return new z(n)}export{l as SIWEController,S as W3mConnectingSiwe,w as W3mConnectingSiweView,se as createSIWEConfig,re as formatMessage,J as getAddressFromMessage,Z as getChainIdFromMessage,B as getDidAddress,Q as getDidChainId,ee as verifySignature};
