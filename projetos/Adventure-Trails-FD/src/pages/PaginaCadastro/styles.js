import { styled } from "@mui/system";

export const PageTitle = styled("h1")({
 marginBottom: "2rem"
});

export const FormComponent = styled("form")({
 display: "flex",
 flexDirection: "column",
 gap: "1rem"
});

export const InputWrapper = styled("div")({
 display: "flex",
 flexDirection: "column"
});

export const InputLabel = styled("label")({
 marginBottom: "0.5rem"
});

export const Input = styled("input")({
 padding: "0.5rem",
 border: "1px solid #ccc",
 borderRadius: "0.25rem",
 outline: "none"
});
export const Button = styled("button")({
 padding: "0.5rem 1rem",
 border: "none",
 borderRadius: "0.25rem",
 outline: "none",
 cursor: "pointer",
 backgroundColor: "#000",
 color: "#fff",
 "&:hover": {
  backgroundColor: "#333"
 }
});
export const ErrorMessage = styled("p")({
 color: "red",
 marginBottom: "0.5rem"
});
