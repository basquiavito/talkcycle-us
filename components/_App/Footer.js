import styles from '@/styles/footer.module.css'


export default function footer(){
    return <>
    <div className={styles.row}>
<div className={styles.gridMargins}>


   
<footer className={styles.siteFooter}>
<div className={`${styles.gridItems} ${styles.siteFooterContainer}`}>
<div className={styles.brandInfo}>
<div className={styles.siteFooterLogo}>
<a className={styles.siteFooterLogoLink} >
    <span className={styles.responsiveImage}>
        <picture className={styles.imageResp}>
<img className={styles.rmImages} alt="" src=""></img>
        </picture>
 
    </span>
</a>
</div>


<div className={styles.siteFooterAbout}>
 <p className={styles.siteFooterAboutText}>
Online Spanish Course
 </p>   
<br/> 
<div className={styles.socialIcons}>
<ul className={styles.socialIconsList}>
<li className={styles.listItems}>
<a href="https://www.facebook.com/" aria-label="Follow us on Facebook"  className={styles.externalLink} rel="nofollow noopener" target="_blank">
<div className={styles.socialIconContainer}>
<svg className={`${styles.icon} ${styles.iconFacebook}`} focusable="false" viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Facebook</title>
<path d="M13.621 11.099V13.302H12V15.995H13.621V24H16.951V15.995H19.186C19.186 15.995 19.395 14.704 19.496 13.292H16.964V11.45C16.964 11.175 17.327 10.804 17.686 10.804H19.5V8H17.033C13.539 8 13.621 10.696 13.621 11.099Z" fill="white"></path></svg>
</div>
</a>
</li>

<li className={styles.listItems}>
<a href="https://www.twitter.com/" aria-label="Follow us on Twitter"  className={styles.externalLink} rel="nofollow noopener" target="_blank">
<div className={styles.socialIconContainer}>
<svg className={`${styles.icon} ${styles.iconFacebook}`} focusable="false" viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M13.032 22.003C19.07 22.003 22.372 17.001 22.372 12.663C22.3719 12.5216 22.3686 12.3803 22.362 12.239C23.0045 11.7744 23.5592 11.1991 24 10.54C23.401 10.8056 22.7656 10.9799 22.115 11.057C22.8003 10.6467 23.3132 10.0013 23.558 9.24103C22.9138 9.62343 22.209 9.89297 21.474 10.038C20.9799 9.50946 20.325 9.15892 19.6112 9.04091C18.8973 8.9229 18.1644 9.04403 17.5265 9.38545C16.8886 9.72688 16.3813 10.2695 16.0836 10.9289C15.7858 11.5884 15.7142 12.3277 15.88 13.032C14.5746 12.9664 13.2976 12.6269 12.132 12.0356C10.9663 11.4444 9.93808 10.6145 9.114 9.60003C8.69297 10.3223 8.56366 11.1782 8.7525 11.9926C8.94134 12.8071 9.43407 13.5187 10.13 13.982C9.60866 13.9664 9.0987 13.8258 8.643 13.572V13.614C8.64319 14.3718 8.90547 15.1063 9.38536 15.6928C9.86525 16.2793 10.5332 16.6818 11.276 16.832C10.7924 16.9633 10.2852 16.9825 9.793 16.888C10.0027 17.5404 10.411 18.1109 10.961 18.5197C11.5109 18.9286 12.1749 19.1552 12.86 19.168C11.6971 20.0805 10.2611 20.5754 8.783 20.573C8.518 20.573 8.257 20.558 8 20.528C9.5011 21.4921 11.248 22.0038 13.032 22.002" fill="white"></path></svg>
</div>
</a>
</li>

<li className={styles.listItems}>
<a href="https://www.pinterest.com/" aria-label="Follow us on Pinterest"  className={styles.externalLink} rel="nofollow noopener" target="_blank">
<div className={styles.socialIconContainer}>
<svg className={`${styles.icon} ${styles.iconFacebook}`} focusable="false" viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title><path d="M15.169 18.448C14.793 20.093 14.425 21.678 13.623 22.928C13.377 23.311 13.13 23.793 12.71 24C12.09 20.807 13.387 18.12 13.899 15.436C13.246 14.103 13.652 11.846 15.051 11.59C17.077 11.22 16.543 13.664 16.2 14.8C16.01 15.424 15.671 16.021 15.722 16.705C15.835 18.146 17.648 18.24 18.577 17.497C19.909 16.436 20.295 14.385 20.164 12.7C19.967 10.135 17.062 8.85997 14.496 9.88497C13.173 10.413 11.973 11.628 11.799 13.413C11.709 14.353 11.906 15.104 12.276 15.634C12.331 15.715 12.523 15.857 12.552 16.072C12.61 16.506 12.352 16.974 12.116 17.298C10.802 16.92 10.124 15.741 10.016 14.248C9.76596 10.848 12.558 8.26397 15.841 8.02197C19.348 7.76497 22.126 9.78896 22.384 12.74C22.576 14.933 21.797 17.14 20.561 18.329C19.631 19.221 17.656 20.096 16.041 19.242C15.684 19.052 15.524 18.82 15.169 18.448Z" fill="white"></path></svg>
</div>
</a>
</li>

<li className={styles.listItems}>
<a href="https://www.instagram.com/" aria-label="Follow us on Instagram" className={styles.externalLink} rel="nofollow noopener" target="_blank">
<div className={styles.socialIconContainer}>
<svg className={`${styles.icon} ${styles.iconFacebook}`} focusable="false" viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M16 8C18.173 8 18.445 8.01 19.298 8.048C20.15 8.087 20.731 8.222 21.24 8.42C21.766 8.624 22.213 8.898 22.657 9.343C23.102 9.787 23.376 10.233 23.58 10.76C23.778 11.269 23.913 11.85 23.952 12.702C23.991 13.555 24 13.827 24 16C24 18.173 23.99 18.445 23.952 19.298C23.913 20.15 23.778 20.731 23.58 21.24C23.379 21.7738 23.064 22.2574 22.657 22.657C22.213 23.102 21.767 23.376 21.24 23.58C20.731 23.778 20.15 23.913 19.298 23.952C18.445 23.991 18.173 24 16 24C13.827 24 13.555 23.99 12.702 23.952C11.85 23.913 11.269 23.778 10.76 23.58C10.2262 23.379 9.74259 23.064 9.343 22.657C8.93593 22.2574 8.62093 21.7738 8.42 21.24C8.222 20.731 8.087 20.15 8.048 19.298C8.01 18.445 8 18.173 8 16C8 13.827 8.01 13.555 8.048 12.702C8.087 11.85 8.222 11.269 8.42 10.76C8.624 10.234 8.898 9.787 9.343 9.343C9.787 8.898 10.233 8.624 10.76 8.42C11.269 8.222 11.85 8.087 12.702 8.048C13.555 8.01 13.827 8 16 8ZM16 10C14.046 10 13.814 10.007 13.043 10.043C12.329 10.075 11.942 10.194 11.683 10.295C11.3657 10.4124 11.0787 10.5993 10.843 10.842C10.586 11.098 10.427 11.342 10.295 11.684C10.195 11.942 10.075 12.329 10.043 13.043C10.007 13.814 10 14.046 10 16C10 17.954 10.007 18.186 10.043 18.957C10.075 19.671 10.194 20.058 10.295 20.317C10.427 20.658 10.586 20.902 10.842 21.157C11.098 21.414 11.342 21.573 11.684 21.705C11.942 21.805 12.329 21.925 13.043 21.957C13.814 21.993 14.046 22 16 22C17.954 22 18.186 21.993 18.957 21.957C19.671 21.925 20.058 21.806 20.317 21.705C20.658 21.573 20.902 21.414 21.157 21.158C21.414 20.902 21.573 20.658 21.705 20.316C21.805 20.058 21.925 19.671 21.957 18.957C21.993 18.186 22 17.954 22 16C22 14.046 21.993 13.814 21.957 13.043C21.925 12.329 21.806 11.942 21.705 11.683C21.5876 11.3657 21.4007 11.0787 21.158 10.843C20.9219 10.5997 20.6341 10.4124 20.316 10.295C20.058 10.195 19.671 10.075 18.957 10.043C18.186 10.007 17.954 10 16 10ZM16 11.768C16.5558 11.768 17.1061 11.8775 17.6195 12.0901C18.133 12.3028 18.5995 12.6145 18.9925 13.0075C19.3855 13.4005 19.6972 13.867 19.9099 14.3805C20.1225 14.8939 20.232 15.4442 20.232 16C20.232 16.5558 20.1225 17.1061 19.9099 17.6195C19.6972 18.133 19.3855 18.5995 18.9925 18.9925C18.5995 19.3855 18.133 19.6972 17.6195 19.9099C17.1061 20.1225 16.5558 20.232 16 20.232C14.8776 20.232 13.8012 19.7861 13.0075 18.9925C12.2139 18.1988 11.768 17.1224 11.768 16C11.768 14.8776 12.2139 13.8012 13.0075 13.0075C13.8012 12.2139 14.8776 11.768 16 11.768ZM16 18.368C16.628 18.368 17.2303 18.1185 17.6744 17.6744C18.1185 17.2303 18.368 16.628 18.368 16C18.368 15.372 18.1185 14.7697 17.6744 14.3256C17.2303 13.8815 16.628 13.632 16 13.632C15.372 13.632 14.7697 13.8815 14.3256 14.3256C13.8815 14.7697 13.632 15.372 13.632 16C13.632 16.628 13.8815 17.2303 14.3256 17.6744C14.7697 18.1185 15.372 18.368 16 18.368ZM21.3 11.85C21.3 12.155 21.1788 12.4475 20.9632 12.6632C20.7475 12.8788 20.455 13 20.15 13C19.845 13 19.5525 12.8788 19.3368 12.6632C19.1212 12.4475 19 12.155 19 11.85C19 11.545 19.1212 11.2525 19.3368 11.0368C19.5525 10.8212 19.845 10.7 20.15 10.7C20.455 10.7 20.7475 10.8212 20.9632 11.0368C21.1788 11.2525 21.3 11.545 21.3 11.85Z" fill="white"></path></svg></div>
</a>
</li>
</ul>
</div>
<hr/><br/>
 <p className={styles.siteFooterAboutText}   >
 Site map | About | Newsletter  | Contact us   </p> 
</div><br/>

 
</div>

 


</div>



</footer>
</div></div>
<style jsx>
{`
 
svg:not(:root) {
    overflow: hidden;
}
.listItems {
    padding-left: 2rem;
}
a {
    transition-timing-function: ease-in-out;
    transition-property: color,background,text-shadow;
    background-color: transparent;
    cursor: pointer;
    color: #f5f5f2;
}
hr {
 
 
 
    border : 2px solid #0ff;  
  
}
picture {
    width: 100%;
    height: auto;
} 
img {
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
}
nav {
    display: blog;
}
footer {
    background-color:  #000;
} 
 
`}    
</style>
    </>
}