import { Divider, List } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
//   import NextLink from 'next/link';
 import Link from '@mui/material/Link';
 
const useStyles = makeStyles({
   menuList: {
       display: 'flex',
       justifyContent: 'flex-start',
       height: '70px',
    //    marginTop: '20px',
       borderBottom: '1px solid #E8E8E8',
       marginBottom: '30px',
   },
   listItemText: {
      maxWidth: 'max-content',
      marginLeft: '20px',
      fontSize: '20px',
      textDecoration: 'none',
      color: '#000',
      textDecorationLine: 'none'
   },
   homeLink:{
       marginLeft: '15px',
       marginTop: '5px',
       textAlign: 'center',
       lineHeight: '30px',

},
   divider:{
       backgroundColor: '#b8a870',
       height:'3px',
        width: '30px',
        marginTop: '18px'
   },
   dividerLine: {
   }
})

export default function MenuList() {
   const classes = useStyles();
   return(
       <List className={classes.menuList} color='text.secondary' >
           <Link href='/#' className={classes.homeLink} >
               <HomeIcon color='primary' fontSize='large' />
               <Divider  className={classes.divider} />  
           </Link>
             <Link href='/#'  className={classes.listItemText}  >ساعت&zwnj;های کاری</Link>
             <Link href='/#'  className={classes.listItemText}  >تماس با ما و درباره ما</Link>
             {/* <Link href='/#' component={NextLink} className={classes.listItemText}  >رویدادها</Link> */}
             <Link href='/#' className={classes.listItemText}  >رویدادها</Link>
         </List>
   )
}