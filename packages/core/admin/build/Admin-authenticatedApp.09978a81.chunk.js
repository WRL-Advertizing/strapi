"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[801],{29761:function(K,M,n){n.r(M),n.d(M,{default:function(){return Tt}});var e=n(32735),i=n(13478),P=n(84968),E=n(33795),z=n.n(E),y={i8:"4.7.1"},k=n(8888),d=n(5141),S=n(4409),R=n(74506),b=n(51968),$=n(88311),U=n.n($),Ce=n(58107),v=n(83292),Me=n(60216),l=n.n(Me),G=n(5636),o=n(39161),C=n(57269);const Re=(0,v.default)(o.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,te=({onClose:t,onSkip:a,children:s,hideSkip:r})=>{const{formatMessage:g}=(0,G.useIntl)();return e.createElement(o.Portal,null,e.createElement(Re,{onClick:t,padding:8,justifyContent:"center"},e.createElement(o.FocusTrap,{onEscape:t},e.createElement(o.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:p=>p.stopPropagation()},e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.IconButton,{onClick:t,"aria-label":g({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(C.Cross,null)})),e.createElement(o.Box,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},s),!r&&e.createElement(o.Flex,{justifyContent:"flex-end"},e.createElement(o.Button,{variant:"tertiary",onClick:a},g({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};te.propTypes={children:l().node.isRequired,onClose:l().func.isRequired,onSkip:l().func.isRequired,hideSkip:l().bool.isRequired};var Se=te,ne=n(97889);const ae={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1};var xe=(t=ae,a)=>(0,ne.default)(t,s=>{switch(a.type){case"UPDATE_MODAL":{s.stepContent=a.content,s.sectionIndex=a.newSectionIndex,s.stepIndex=a.newStepIndex,s.hasSectionAfter=a.newHasSectionAfter,s.hasStepAfter=a.newHasStepAfter;break}default:return s}});const Ie=v.default.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,oe=({id:t,defaultMessage:a})=>{const{formatMessage:s}=(0,G.useIntl)();return e.createElement(o.Stack,{spacing:4,paddingBottom:6},s({id:t,defaultMessage:a},{documentationLink:r=>e.createElement(o.Typography,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},r),b:r=>e.createElement(o.Typography,{fontWeight:"semiBold"},r),p:r=>e.createElement(o.Typography,null,r),light:r=>e.createElement(o.Typography,{textColor:"neutral600"},r),ul:r=>e.createElement(o.Box,{paddingLeft:6},e.createElement("ul",null,r)),li:r=>e.createElement(Ie,null,r)}))};oe.propTypes={id:l().string.isRequired,defaultMessage:l().string.isRequired};var Pe=oe,H=n(78024),Ae=n(14317);const w=({number:t,last:a,type:s})=>e.createElement(o.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Ae.Z,{number:t,type:s}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:l().number,last:l().bool,type:l().string};var se=w,N=n(23678);const Z=({title:t,content:a,cta:s,onCtaClick:r,sectionIndex:g,stepIndex:p,hasSectionAfter:f})=>{const{formatMessage:m}=(0,G.useIntl)(),h=g>0,u=p>0,T=g+1;return e.createElement(e.Fragment,null,e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(H.Z,{type:N.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(o.Typography,{variant:"sigma",textColor:"primary600"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(o.Flex,null,e.createElement(o.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(se,{number:g+1,type:u?N.hx:N.lW})),e.createElement(o.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},m(t))),e.createElement(o.Flex,{alignItems:"stretch"},e.createElement(o.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},f&&e.createElement(e.Fragment,null,e.createElement(H.Z,{type:N.hx}),u&&e.createElement(se,{number:T+1,type:N.lW,last:!0}))),e.createElement(o.Box,null,e.createElement(Pe,{...a}),s&&(s.target?e.createElement(i.LinkButton,{endIcon:e.createElement(C.ArrowRight,null),onClick:r,to:s.target},m(s.title)):e.createElement(o.Button,{endIcon:e.createElement(C.ArrowRight,null),onClick:r},m(s.title))))),u&&f&&e.createElement(o.Box,{paddingTop:3},e.createElement(o.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(H.Z,{type:N.hx,minHeight:(0,i.pxToRem)(24)}))))};Z.defaultProps={currentStep:null,cta:void 0},Z.propTypes={sectionIndex:l().number.isRequired,stepIndex:l().number.isRequired,hasSectionAfter:l().bool.isRequired,content:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired,cta:l().shape({target:l().string,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired})}),currentStep:l().string,onCtaClick:l().func.isRequired,title:l().shape({id:l().string.isRequired,defaultMessage:l().string.isRequired}).isRequired};var Le=Z,be=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:s,setStepState:r,isGuidedTourVisible:g,setSkipped:p}=(0,i.useGuidedTour)(),[f,m]=(0,e.useState)(t),[{stepContent:h,sectionIndex:u,stepIndex:T,hasSectionAfter:O,hasStepAfter:A},W]=(0,e.useReducer)(xe,ae),{trackUsage:F}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){m(!1);return}const[D]=U()(a,t);m(!D&&g)},[t,a,g]),(0,e.useEffect)(()=>{if(t){const[D]=U()(Ce.Z,t),L=Object.keys(a),[I,c]=t.split("."),B=L.indexOf(I),V=Object.keys(a[I]).indexOf(c),q=B<L.length-1,_=V<Object.keys(a[I]).length-1;W({type:"UPDATE_MODAL",content:D,newSectionIndex:B,newStepIndex:V,newHasSectionAfter:q,newHasStepAfter:_})}},[t,a]);const x=()=>{r(t,!0),F(h.trackingEvent),s(null)},j=()=>{p(!0),s(null),F("didSkipGuidedtour")};return f&&h?e.createElement(Se,{hideSkip:!A&&!O,onSkip:j,onClose:x},e.createElement(Le,{...h,onCtaClick:x,currentStep:t,sectionIndex:u,stepIndex:T,hasSectionAfter:O})):null},Oe=n(15300),De=n(61450),Be=n(1897),Q=n(78464),re=n(42889),ke=n(25390),Ge=n(3703),Ne=n(17264);const Fe=(0,v.default)(o.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,ie=(0,v.default)(d.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,le=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const s=(0,e.useRef)(),[r,g]=(0,e.useState)(!1),{logos:{menu:p}}=(0,k.um)(),[f,m]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:u}=(0,G.useIntl)(),{trackUsage:T}=(0,i.useTracking)(),{pathname:O}=(0,d.useLocation)(),A=(0,d.useHistory)(),{post:W}=(0,i.getFetchClient)(),F=h.split(" ").map(c=>c.substring(0,1)).join("").substring(0,2),x=()=>g(c=>!c),j=async()=>{await W("/admin/logout"),i.auth.clearAppStorage(),x(),A.push("/auth/login")},D=c=>{!c.currentTarget.contains(c.relatedTarget)&&c.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&g(!1)},L=(c=null)=>{T("willNavigate",{from:O,to:c})},I=u({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(Oe.$,{condensed:f},e.createElement(De.D,{as:d.NavLink,workplace:u({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:I,icon:e.createElement("img",{src:p.custom||p.default,alt:u({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(o.Divider,null),e.createElement(Be._,null,e.createElement(Q.O,{as:d.NavLink,to:"/content-manager",icon:e.createElement(C.Write,null),onClick:()=>L("/content-manager")},u({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(c=>{const B=c.icon;return e.createElement(Q.O,{as:d.NavLink,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null,t.length>0?e.createElement(re.y,{label:u({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(c=>{const B=c.icon;return e.createElement(Q.O,{as:d.NavLink,badgeContent:c.notificationsCount>0&&c.notificationsCount.toString()||void 0,to:c.to,key:c.to,icon:e.createElement(B,null),onClick:()=>L(c.to)},u(c.intlLabel))})):null),e.createElement(ke.q,null,e.createElement(Ge.r,{id:"main-nav-user-button",ref:s,onClick:x,initials:F},h),r&&e.createElement(Fe,{onBlur:D,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(o.FocusTrap,{onEscape:x},e.createElement(o.Stack,{spacing:0},e.createElement(ie,{tabIndex:0,onClick:x,to:"/me"},e.createElement(o.Typography,null,u({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(ie,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(o.Typography,{textColor:"danger600"},u({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(C.Exit,null))))),e.createElement(Ne.w,{onClick:()=>m(c=>!c)},u(f?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};le.propTypes={generalSectionLinks:l().array.isRequired,pluginsSectionLinks:l().array.isRequired};var Ue=le;const We=(0,v.default)(o.Box)`
  flex: 1;
`,ce=({children:t,sideNav:a})=>{const{formatMessage:s}=(0,G.useIntl)();return e.createElement(o.Box,{background:"neutral100"},e.createElement(o.SkipToContent,null,s({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(o.Flex,{alignItems:"flex-start"},a,e.createElement(We,null,t)))};ce.propTypes={children:l().node.isRequired,sideNav:l().node.isRequired};var je=ce,Y=n(64421),Ke=n(26648),$e=n.p+"19eb2dfcf2603eb55733.png";const Ve=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],de={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},ze=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:C.Book},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:C.PaperPlane}],He=(0,v.default)(o.Button)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,we=(0,v.default)(o.Flex)`
  transform: translate(-50%, -50%);
`,Ze=(0,v.default)(o.Flex)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${o.Typography}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${o.Typography}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Qe=v.default.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,ue=(0,v.default)(o.Typography)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,pe=(0,v.default)(ue)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;var Ye=()=>{const t=(0,e.useRef)(),[a,s]=(0,e.useState)(!1),{formatMessage:r}=(0,G.useIntl)(),{communityEdition:g}=(0,i.useAppInfos)(),p=()=>{s(m=>!m)},f=[...ze,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:C.Message,href:g?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(o.Box,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(He,{"aria-label":r(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:p,ref:t},e.createElement(o.Icon,{as:a?C.Cross:C.Question,color:"buttonNeutral0"})),a&&e.createElement(o.Portal,null,e.createElement(o.PopoverPrimitives.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(o.FocusTrap,{onEscape:p},e.createElement(o.Flex,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(ue,{fontWeight:"bold"},r({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(pe,{as:"a",href:de.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},r(de.label))),e.createElement(o.Divider,null),Ve.map(({href:m,duration:h,label:u},T)=>e.createElement(Ze,{as:"a",href:m,target:"_blank",rel:"noreferrer noopener",key:m,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(o.Box,{paddingRight:5},e.createElement(o.Typography,{textColor:"neutral200",variant:"alpha"},T+1)),e.createElement(o.Box,{position:"relative"},e.createElement(Qe,{src:$e,alt:""}),e.createElement(we,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(o.Icon,{as:C.Play,color:"buttonNeutral0",width:3,height:3}))),e.createElement(o.Flex,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(o.Typography,{fontWeight:"bold"},r(u)),e.createElement(o.VisuallyHidden,null,":"),e.createElement(o.Typography,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(o.Stack,{spacing:2,paddingLeft:5,paddingTop:2,paddingBottom:5},f.map(({label:m,href:h,icon:u})=>e.createElement(o.Stack,{horizontal:!0,spacing:3,key:h},e.createElement(o.Icon,{as:u,color:"primary600"}),e.createElement(pe,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},r(m)))))))))};const Je=(0,e.lazy)(()=>Promise.all([n.e(8469),n.e(8252),n.e(994)]).then(n.bind(n,39573))),Xe=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,12016))),qe=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,15415))),_e=(0,e.lazy)(()=>Promise.all([n.e(8469),n.e(5516)]).then(n.bind(n,92698))),me=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,53951))),et=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,92336))),tt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,9972))),ge=(0,e.lazy)(()=>Promise.all([n.e(8469),n.e(5895)]).then(n.bind(n,71540))),nt=()=>{const{trackUsage:t}=(0,i.useTracking)(),a=(0,S.useDispatch)(),s=(0,S.useSelector)(r=>r.admin_app.status);(0,e.useEffect)(()=>{s==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:Ke.e}))},[s])};var at=()=>{nt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:s}=(0,k.H9)(),{menu:r}=(0,i.useStrapiApp)(),{showTutorials:g}=(0,k.um)(),p=(0,e.useMemo)(()=>r.filter(f=>f.Component).map(({to:f,Component:m,exact:h})=>(0,Y.ot)(m,f,h)),[r]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(R.DndProvider,{backend:b.PD},e.createElement(je,{sideNav:e.createElement(Ue,{generalSectionLinks:a,pluginsSectionLinks:s})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(d.Switch,null,e.createElement(d.Route,{path:"/",component:Xe,exact:!0}),e.createElement(d.Route,{path:"/me",component:tt,exact:!0}),e.createElement(d.Route,{path:"/content-manager",component:Je}),p,e.createElement(d.Route,{path:"/settings/:settingId",component:ge}),e.createElement(d.Route,{path:"/settings",component:ge,exact:!0}),e.createElement(d.Route,{path:"/marketplace"},e.createElement(_e,null)),e.createElement(d.Route,{path:"/list-plugins",exact:!0},e.createElement(qe,null)),e.createElement(d.Route,{path:"/404",component:me}),e.createElement(d.Route,{path:"/500",component:et}),e.createElement(d.Route,{path:"",component:me}))),e.createElement(be,null),g&&e.createElement(Ye,null)))},ot=t=>({plugins:Object.keys(t).reduce((a,s)=>(a[s]={...t[s]},a),{})}),st=n(3040),rt=n.n(st);const he={plugins:null};var it=(t=he,a)=>(0,ne.default)(t,s=>{switch(a.type){case"SET_PLUGIN_READY":{rt()(s,["plugins",a.pluginId,"isReady"],!0);break}default:return s}}),lt=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:a},s]=(0,e.useReducer)(it,he,()=>ot(t)),r=(0,e.useRef)(p=>{s({type:"SET_PLUGIN_READY",pluginId:p})});if(Object.keys(a).some(p=>a[p].isReady===!1)){const p=Object.keys(a).reduce((f,m)=>{const h=a[m].initializer;if(h){const u=a[m].pluginId;f.push(e.createElement(h,{key:u,setPlugin:r.current}))}return f},[]);return e.createElement(e.Fragment,null,p,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(at,null)},fe=n(17367);const ct=()=>({type:fe.l}),dt=t=>({type:fe.m,permissions:t}),Ee=({children:t,permissions:a,refetchPermissions:s})=>{const{allPermissions:r}=(0,S.useSelector)(p=>p.rbacProvider),g=(0,S.useDispatch)();return(0,e.useEffect)(()=>(g(dt(a)),()=>{g(ct())}),[a,g]),r?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:r,refetchPermissions:s}},t):e.createElement(i.LoadingIndicatorPage,null)};Ee.propTypes={children:l().element.isRequired,permissions:l().array.isRequired,refetchPermissions:l().func.isRequired};var ut=Ee,pt=n(55721),mt=n(54770),J=n.n(mt),ye=(t,a)=>!J().valid(t)||!J().valid(a)?!1:J().lt(t,a);const Te=y.i8,gt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:X}=(0,i.getFetchClient)(),ht=async t=>{try{const{data:{tag_name:a}}=await pt.Z.get("https://api.github.com/repos/strapi/strapi/releases/latest");return ye(Te,a)&&gt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Te}},ft=async()=>{try{const{data:t,headers:a}=await X("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Et=async()=>{try{const{data:t,headers:a}=await X("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},yt=async()=>{try{const{data:{data:{roles:t}}}=await X("/admin/users/me");return t}catch(t){throw new Error(t)}},ve=y.i8;var Tt=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),a=(0,i.useNotification)(),s=(0,e.useRef)(t),r=i.auth.getUserInfo(),g=z()(r,"username")||(0,Y.Pp)(r.firstname,r.lastname),[p,f]=(0,e.useState)(g),[m,h]=(0,e.useState)(null),{showReleaseNotification:u}=(0,k.um)(),[{data:T,status:O},{data:A,isLoading:W},{data:F,status:x,refetch:j,isFetched:D,isFetching:L},{data:I}]=(0,P.useQueries)([{queryKey:"app-infos",queryFn:ft},{queryKey:"strapi-release",queryFn:()=>ht(a),enabled:u,initialData:ve},{queryKey:"admin-users-permission",queryFn:Et,initialData:[]},{queryKey:"user-roles",queryFn:yt}]),c=(0,e.useMemo)(()=>ye(ve,A),[A]);(0,e.useEffect)(()=>{I&&I.find(({code:ee})=>ee==="strapi-super-admin")&&T?.autoReload&&s.current(!0)},[I,T]),(0,e.useEffect)(()=>{(async()=>{const ee=await(0,Y.Qy)(r);h(ee)})()},[r]);const V=W||(L&&D||O==="loading"||x==="loading"),q=(0,e.useMemo)(()=>({...T,userId:m,latestStrapiReleaseTag:A,setUserDisplayName:f,shouldUpdateStrapi:c,userDisplayName:p}),[T,A,c,p,m]);return V?e.createElement(i.LoadingIndicatorPage,null):O==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:q},e.createElement(ut,{permissions:F,refetchPermissions:j},e.createElement(lt,null)))}},78024:function(K,M,n){var e=n(32735),i=n(60216),P=n.n(i),E=n(13478),z=n.n(E),y=n(39161),k=n.n(y),d=n(23678);const S=({type:R,...b})=>e.createElement(y.Box,{width:(0,E.pxToRem)(2),height:"100%",background:R===d.VM?"neutral300":"primary500",hasRadius:!0,...b});S.defaultProps={type:d.VM},S.propTypes={type:P().oneOf([d.lW,d.hx,d.VM])},M.Z=S},14317:function(K,M,n){var e=n(32735),i=n(60216),P=n.n(i),E=n(13478),z=n.n(E),y=n(39161),k=n.n(y),d=n(57269),S=n.n(d),R=n(23678);const b=({type:$,number:U})=>$===R.hx?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,E.pxToRem)(30),height:(0,E.pxToRem)(30),justifyContent:"center"},e.createElement(y.Icon,{as:d.Check,"aria-hidden":!0,width:(0,E.pxToRem)(16),color:"neutral0"})):$===R.lW?e.createElement(y.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,E.pxToRem)(30),height:(0,E.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral0"},U)):e.createElement(y.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,E.pxToRem)(30),height:(0,E.pxToRem)(30),justifyContent:"center"},e.createElement(y.Typography,{fontWeight:"semiBold",textColor:"neutral600"},U));b.defaultProps={number:void 0,type:R.VM},b.propTypes={number:P().number,type:P().oneOf([R.lW,R.hx,R.VM])},M.Z=b},23678:function(K,M,n){n.d(M,{VM:function(){return P},hx:function(){return i},lW:function(){return e}});const e="isActive",i="isDone",P="isNotDone"},58107:function(K,M){const n={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}};M.Z=n}}]);
