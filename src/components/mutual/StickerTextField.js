import { TextField } from '@mui/material';

const StickerTextField = ({ text, onChange, inputProps, placeholder }) => {
  const changedTextFieldStyles = {
    '.css-1rb63tl-MuiInputBase-root-MuiInput-root:before ': {
      borderBottom: 0,
      content: 'none',
    },
    '.css-1rb63tl-MuiInputBase-root-MuiInput-root:after ': {
      borderBottom: 0,
    },
    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after ': {
      borderBottom: 0,
      content: 'none',
    },
    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:before ': {
      borderBottom: 0,
      content: 'none',
    },
  };

  return (
    <TextField
      inputProps={inputProps}
      sx={changedTextFieldStyles}
      id="standard-multiline-static"
      placeholder={placeholder}
      multiline
      variant="standard"
      required
      autoFocus={true}
      fullWidth={true}
      type="text"
      name="text"
      value={text}
      onChange={onChange}
    />
  );
};

export default StickerTextField;
