//displays footer
function Footer(){
    let year = new Date().getFullYear()
      return (
          <footer>Copyright &copy; {year}</footer>
      );
}

//to be used by <App />
export default Footer;