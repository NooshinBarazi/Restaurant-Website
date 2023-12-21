'use client'
//  import { List, ListItem, ListItemText } from '@mui/material';
 import { List, ListItem, ListItemText } from '@mui/material';
 import { makeStyles } from '@mui/styles';
import Theme from '@/theme/Theme';
// import { makeStyles } from '@mui/system';

// import {makeStyles} from '@mui/system';


const useStyles = makeStyles({
    menuList: {
        display: 'flex',
        justifyContent: 'flex-start',
        border: '1px solid red',
        alignItems: 'center',
        // maxWidth: '50%'
    },
    listItemText: {
       maxWidth: 'max-content',
       marginLeft: '15px'

    },
})

export default function MenuList() {
    console.log('before')
    const classes = useStyles();
    console.log(classes, 'classess')

    return(
        
        <List className={classes.menuList}>
          <ListItem disablePadding  className={classes.listItemText} >
              <ListItemText  primary="ساعت های کاری" />
          </ListItem>
          <ListItem className={classes.listItemText} disablePadding>
              <ListItemText  primary="تماس با ما و درباره ما" />
          </ListItem>
          <ListItem className={classes.listItemText} disablePadding>
              <ListItemText  primary="رویدادها" />
          </ListItem>
          </List>
    )

}