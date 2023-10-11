(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{4935:function(e,s,t){Promise.resolve().then(t.t.bind(t,7069,23)),Promise.resolve().then(t.bind(t,4099)),Promise.resolve().then(t.t.bind(t,3388,23))},4099:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Register}});var r=t(6705),i=t(955),l=t(1503),a=t.n(l),n=t(3316),o=t.n(n);function MeetingInfo(e){let{topic:s,description:t,dateTime:i}=e,l="";if(i){let e=a()(i).format("MMMM"),s=a()(i).format("D"),t=a()(i).format("YYYY"),r=a()(i).format("h:mmA");l="".concat(e," ").concat(s,", ").concat(t,"; ").concat(r)}return(0,r.jsxs)("div",{className:o()["meeting-info"],children:[(0,r.jsx)("p",{className:o()["table-title"],children:"Topic:"}),(0,r.jsx)("p",{className:o().topic,children:null!=s?s:""}),(0,r.jsx)("p",{className:o()["table-title"],children:"Description:"}),(0,r.jsx)("p",{className:o().description,children:null!=t?t:""}),(0,r.jsx)("p",{className:o()["table-title"],children:"Time:"}),(0,r.jsxs)("p",{className:o().description,children:[l," ",(0,r.jsx)("span",{className:o()["time-zone"],children:"Eastern Time (US and Canada)"})]})]})}var m=t(1706),c=t.n(m);function CommunityCallSuccess(e){let{email:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"".concat(c().title," ").concat(c().success),children:"Thank you for signing up!"}),(0,r.jsx)("div",{className:c().root_success,children:(0,r.jsxs)("p",{className:c().success_message,children:["We look forward to seeing you on our next Community Call. You will receive a confirmation email with a Zoom meeting link to join at the time of the call. Please remember to log into Zoom with the same email"," ",(0,r.jsxs)("span",{className:c().success_message_email,children:["(",s,")"]})," you used to sign up to avoid any hiccups. See you soon!"]})})]})}var u=t(8816),f=t(4798),_=t(8449);t(2655),t(470);var d=(0,t(1162).$)("b414f62a36f977d16ce2ccbb2428a3f55bd8886b"),p=t(3807),g=t.n(p);let h=_.z.object({firstName:_.z.string().min(1),lastName:_.z.string().min(1),email:_.z.string().email(),confirmEmail:_.z.string().email()}).required({firstName:!0,lastName:!0,email:!0,confirmEmail:!0}).refine(e=>e.email===e.confirmEmail,{message:"Emails don't match",path:["confirmEmail"]}),b={firstName:"",lastName:"",email:"",confirmEmail:"",company:"",jobTitle:"",comments:"",meetingGuid:""};function RegisterForm(e){let{initialData:s,setRegisteredEmail:t}=e;b={...s,confirmEmail:s.email,comments:""};let{meetingGuid:l}=s,{registerField:a,formIsValid:n}=function(e,s){let[t,r]=(0,i.useState)(),getElementErrorMessage=e=>{if(!t)return"";let s=t.errors.filter(s=>s.path.includes(e));return 0===s.length?"":s[0].message},getHelperText=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return 0!==getElementErrorMessage(e).length?getElementErrorMessage(e):s},checkElementValid=e=>{if(!t)return!1;let s=t.errors.filter(s=>s.path.includes(e));return s.length>0};return{error:t,setError:r,isElementValid:e=>({error:checkElementValid(e)}),formIsValid:(s,t)=>{let i=t.map(e=>[e,""]),l=Object.fromEntries(i);for(let e in l)l[e]=s.get(e);let a=e.safeParse(l);return a.success?r(void 0):r(a.error),a},getElementErrorMessage,getHelperText,registerField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{name:e,error:checkElementValid(e),helperText:getHelperText(e,t),defaultValue:s[e]}}}}(h,b);async function onFormSubmitHandler(e){let s=n(e,["firstName","lastName","email","confirmEmail"]);if(s.success){let s={firstName:"",lastName:"",email:"",company:"",jobTitle:"",comments:"",meetingGuid:l};e.forEach((e,t)=>{t in s&&(s[t]=e)});let r=await d(s);t(r)}}return(0,r.jsxs)("form",{action:onFormSubmitHandler,className:g()["register-form"],children:[(0,r.jsx)("p",{className:g()["register-form-title"],children:"Participant Information"}),(0,r.jsxs)("div",{className:g()["register-form-controls"],children:[(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"First Name",placeholder:"First Name",required:!0,...a("firstName")}),(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"Last Name",placeholder:"Last Name",required:!0,...a("lastName")})]}),(0,r.jsxs)("div",{className:g()["register-form-controls"],children:[(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"Email Address",placeholder:"Email Address",required:!0,...a("email","Note: Use this email address to sign into Zoom")}),(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"Confirm Email Address",placeholder:"Confirm Email Address",required:!0,...a("confirmEmail")})]}),(0,r.jsxs)("div",{className:g()["register-form-controls"],children:[(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"Company (optional)",placeholder:"Company",...a("company")}),(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-input"],label:"Job Title (optional)",placeholder:"Job Title",...a("jobTitle")})]}),(0,r.jsx)("p",{className:g()["register-form-title"],children:"Questions & Comments"}),(0,r.jsx)(u.Z,{InputLabelProps:{shrink:!0},className:g()["register-form-textarea"],label:"If you have any questions or comments for the call, drop them below!",multiline:!0,name:"comments",placeholder:"Write message here",rows:5}),(0,r.jsx)(f.Z,{className:g()["submit-btn"],type:"submit",children:"Register"})]})}function Register(e){let{initialData:s,meetingInfo:t}=e,{dateTime:l,description:a,topic:n}=t,[o,m]=(0,i.useState)(null);return o?(0,r.jsx)(CommunityCallSuccess,{email:o}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:g().title,children:"Register for Community Call"}),(0,r.jsx)(MeetingInfo,{dateTime:l,description:a,topic:n}),(0,r.jsx)(RegisterForm,{initialData:s,setRegisteredEmail:m})]})}},7069:function(e){e.exports={error:"styles_error__X_TLD",message:"styles_message__30ro2","action-wrapper":"styles_action-wrapper__0NwCF","login-btn":"styles_login-btn__hvlEL","insider-btn":"styles_insider-btn__Qxruc"}},3316:function(e){e.exports={"meeting-info":"styles_meeting-info__tDcLO","table-title":"styles_table-title__iqxCM",topic:"styles_topic__oF7AP",description:"styles_description__CSD64","time-zone":"styles_time-zone__TOpuB",title:"styles_title__E1ZPV","register-form":"styles_register-form__XMDvh"}},3807:function(e){e.exports={title:"styles_title__4YVS6","register-form":"styles_register-form__I2tv3","register-form-title":"styles_register-form-title__CBHkG","register-form-controls":"styles_register-form-controls__F691Y","register-form-input":"styles_register-form-input__cQpg8","register-form-textarea":"styles_register-form-textarea__yj84j","submit-btn":"styles_submit-btn__bM2BP"}},1706:function(e){e.exports={title:"styles_title__pW81v",success:"styles_success__Idirs",root_success:"styles_root_success__oSabM",success_message:"styles_success_message__lCioL",success_message_email:"styles_success_message_email___KKv4"}}},function(e){e.O(0,[488,615,689,121,26,744],function(){return e(e.s=4935)}),_N_E=e.O()}]);