import { Button } from './styles.js'

function DefaultButton({children, theme, ...props}){
    return(
     <Button {...props} theme={theme} >{children}</Button>
    )
}

export default DefaultButton