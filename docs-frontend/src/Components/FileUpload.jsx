

const FileUpload = () => {
    const [files, setFiles] = useState([])

   const handleChange = (e) => {
    setFiles([...e.target.files])
    onFileSelected([...e.target.files])
   }

  return (
    < input type="file"  multiple onChange={handleChange}/>
  )
}

export default FileUpload
