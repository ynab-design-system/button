/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button = ({
  variant = 'primary',
  ...props
}) =>
  <button
    sx={{
      cursor: 'pointer',
      display: 'inline-block',
      px: `2`,
      py: `1`,
      fontSize: 0, // picks up value from `theme.fontSizes[4]`
      variant: `${variant}`,
      fontFamily: 'body',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '4px',
      textAlign: 'center',
    }}>
    {props.children}
  </button>

export default Button