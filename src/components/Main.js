import React from "react";
import "../style/main.css";


export default function Main({
  hmcb,
  hmcTitle,
  img1,
  img2,
  img3,
  alt1,
  alt2,
  alt3,
  optiontitle1,
  optiontitle2,
  optiontitle3,
}) {

    
  return (
    <div className="main-container col-12 d-flex flex-column mt-3 mb-5">
        <div className="header-main-container mb-3 p3 col-12" style={{ backgroundImage: `url(${hmcb})` }}>
            <h2>{hmcTitle}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p>

        </div>
      <table>
        
        <tr>
          <td><img className ="main-img" src ={img1} alt ={alt1}/></td>
          <td>
            <h3>{optiontitle1}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
              Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula
              eu tempor congue, eros est euismod turpis, id tincidunt sapien
              risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec,
              commodo eget, consequat quis, neque. Aliquam faucibus, elit ut
              dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam
              lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu.
              Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
              et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
              feugiat in, orci. In hac habitasse platea dictumst.
            </p>
          </td>
        </tr>
        <tr>
          <td><img className ="main-img" src ={img2} alt ={alt2}/></td>
          <td>
            <h3>{optiontitle2}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
              Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula
              eu tempor congue, eros est euismod turpis, id tincidunt sapien
              risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec,
              commodo eget, consequat quis, neque. Aliquam faucibus, elit ut
              dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam
              lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu.
              Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
              et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
              feugiat in, orci. In hac habitasse platea dictumst.
            </p>
          </td>
        </tr>
        <tr>
          <td><img className ="main-img" src ={img3} alt ={alt3}/></td>
          <td>
            <h3>{optiontitle3}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
              Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula
              eu tempor congue, eros est euismod turpis, id tincidunt sapien
              risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec,
              commodo eget, consequat quis, neque. Aliquam faucibus, elit ut
              dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam
              lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu.
              Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet
              et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu,
              feugiat in, orci. In hac habitasse platea dictumst.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
