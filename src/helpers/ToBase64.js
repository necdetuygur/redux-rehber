const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/*
onChange(e) {
    const that = this;
    const file = e.target.files[0];
    toBase64(file).then(r => {
        that.product.selectedImage = r;
    });
}
*/

export default toBase64;
