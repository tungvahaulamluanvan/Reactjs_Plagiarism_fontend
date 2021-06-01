import axios from "axios"
export const getListFileByUser = async (userid) =>{
        console.log('userid: ' + userid);
        const response = await fetch('http://localhost:8080/list/' + 1);
        const data = await response.json();
        return data;
}
export const uploadFile = (file) =>{
    let formData = new FormData();
    console.log(file);
        formData.append('file', file);
        axios({
            method: 'post',
            url: 'http://localhost:8080/upload',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
         }).then(response => alert(response))
         .catch(error => alert(error));
    };
 export  const axiosGetCall = async () => {
        try {
          const { promise } = await axios.get('http://localhost:8080/list/' + 1)
// enter you logic when the fetch is successful
          
          const dataPromise = promise.then((response) => response.data);
          return dataPromise;
       
        } catch (error) {
// enter your logic for when there is an error (ex. error toast)
          console.log(`error: `, error)
        }
      }
      export const deleteFile = (id) =>{
        try {
          console.log(id);
          return axios.delete('http://localhost:8080/delete/' + id)
        } catch (error) {
          console.error(error)
        }
      }
