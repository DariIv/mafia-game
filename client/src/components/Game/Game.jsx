import React from 'react';

import './Game.css'

function Game(props) {
  return (
    <>
    
    <section id="poker-skin-v1">
    
  
    <div className="poker-skin-v1-main-container">
      <div className="poker-table">
        <div className="poker-table-sub-container">
          <div className="poker-table-sub-container-grid">
            
            <div className="poker-table-grid-cell">
              <h4 id="player-1">Albert459</h4>
              <p>$5.00</p>
            </div>
            

            <div className="poker-table-grid-cell">
              <h4 id="player-3">RowdyRobert</h4>
              <p>$10.00</p>
            </div>
                
            <div className="poker-table-grid-cell">
              <h4 id="player-4">Marie-Lou</h4>
              <p>$1.24</p>
            </div> 
            
              <div className="poker-table-grid-cell my-cards">
             <div className="my-cards-flex"> 
              <div className="cards">
               <div className="top-of-card">
                   <div><p>5</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVQ4jd3Tu0oDQRiG4XfUIHgCm5QWip2ghfeiiOJF2HgRopWVt2Bjr3cggpVFOk9oGRIbxbwWu4vDJrvubgTBrxrm8MzMzwz8i6httf1b2Kx6pV6qM+Niq+qN37lWV5pi+2rP4XTVnTrQtHo2AsrnVG39hLXUiwpYlnN1qgw8rIFlOSgDnxuAj7ERImwO6FWtdS7zIYQ+wETU+QY8NcAeMmwo6nbBtfqOfkKqW6XbqXvqazp5YPJDOupd2h6kYy/qbn59KEAngSWgCywCnXRomaTOC8B9COGzal1i/CS63lFtIIetqe8R+KGul60pfuVJNoHjXN8GcDvOQf82X/BctEYp31GBAAAAAElFTkSuQmCC"} /></div>
                 </div>  
                 <div className="bottom-of-card">  
                 <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAABTUlEQVRIie3VvUrDUByG8fc0i1hc/Iig+IGbg70DcdQrcCyCgqPghbgITm6CXRRE/MBLcHDooFMQBelQHVyqIsXHJcGSJulpPRGHPnC2w/+XkxyI1O8/BPiA/1eYB5wBp4CXNzYInPDTMTCQFzYPVGnvFlhwjZWBRgIW9QZsuYCGgKMMKF4FKPaKzQF3XWBRVWC6W2wKuO8BiwqASVvMA25+gUVdAwUbcNMBFrUen5/0BGWrV2HXmg044xCctQGfHYJts5LAC4fgeccdwAhQ63AZPsOV1RMwbPVYQAl4TBkUAM1wBSl7HoBS0myTgRYlbUhaluRLqkm6lPQq6TDctippTNKKpAlJdUlXkvaNMQ2r01mcvtJykgMnQzOwceCjBXwnzz8/sJfwvXbzwpbCixKvCSzazkm9NDGsIGlb0mjKlhdJO8aYL1u4n7O+Acb7xOz7R6mBAAAAAElFTkSuQmCC"} />
                 </div> 
              </div>
              <div className="cards">
                 <div className="top-of-card">
                   <div><p>4</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVQ4jd3Tu0oDQRiG4XfUIHgCm5QWip2ghfeiiOJF2HgRopWVt2Bjr3cggpVFOk9oGRIbxbwWu4vDJrvubgTBrxrm8MzMzwz8i6httf1b2Kx6pV6qM+Niq+qN37lWV5pi+2rP4XTVnTrQtHo2AsrnVG39hLXUiwpYlnN1qgw8rIFlOSgDnxuAj7ERImwO6FWtdS7zIYQ+wETU+QY8NcAeMmwo6nbBtfqOfkKqW6XbqXvqazp5YPJDOupd2h6kYy/qbn59KEAngSWgCywCnXRomaTOC8B9COGzal1i/CS63lFtIIetqe8R+KGul60pfuVJNoHjXN8GcDvOQf82X/BctEYp31GBAAAAAElFTkSuQmCC"} /></div>
                 </div>  
                 <div className="bottom-of-card">  
                  <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAABTUlEQVRIie3VvUrDUByG8fc0i1hc/Iig+IGbg70DcdQrcCyCgqPghbgITm6CXRRE/MBLcHDooFMQBelQHVyqIsXHJcGSJulpPRGHPnC2w/+XkxyI1O8/BPiA/1eYB5wBp4CXNzYInPDTMTCQFzYPVGnvFlhwjZWBRgIW9QZsuYCGgKMMKF4FKPaKzQF3XWBRVWC6W2wKuO8BiwqASVvMA25+gUVdAwUbcNMBFrUen5/0BGWrV2HXmg044xCctQGfHYJts5LAC4fgeccdwAhQ63AZPsOV1RMwbPVYQAl4TBkUAM1wBSl7HoBS0myTgRYlbUhaluRLqkm6lPQq6TDctippTNKKpAlJdUlXkvaNMQ2r01mcvtJykgMnQzOwceCjBXwnzz8/sJfwvXbzwpbCixKvCSzazkm9NDGsIGlb0mjKlhdJO8aYL1u4n7O+Acb7xOz7R6mBAAAAAElFTkSuQmCC"} />
                 </div> 
              </div>
             </div>  
            </div>
            
             <div className="poker-table-grid-cell">
              <h4 id="player-6">Ellie-Bellie</h4>
              <p>$6.00</p>
            </div>    
          
              <div className="poker-table-grid-cell">
                <div className="chips"><h4><span>$</span>4</h4></div>
            </div> 
            
              <div className="poker-table-grid-cell">
                <div className="chips-container">
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                  
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                  
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                  
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                  
                  <div className="chips-variation">
                   <div className="dealer">
                     <div className="chips"><p>D</p></div>
                   </div>
                   <div className="big-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div>
                   <div className="small-blind">
                     <div className="chips"></div>
                     <div className="chips"></div>
                   </div> 
                   </div>
                  
                </div>  
            </div> 
            
            <div className="poker-table-grid-cell">
                <div className="oponents-cards-container">
                  <div className="oponent-cards"></div> 
                  <div className="oponent-cards"></div> 
              </div>
            </div> 
            
            <div className="poker-table-grid-cell">
              <div className="oponents-cards-container">
                 <div className="oponent-cards"></div> 
                 <div className="oponent-cards"></div>  
              </div>
            </div> 
            
            <div className="poker-table-grid-cell">
              <div className="oponents-cards-container">
                <div className="oponent-cards">
                 <div className="top-of-card">
                   <div><p>5</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAdUlEQVQYlY2PMQrCUBAFZ/8NvEFyNBEPkD6dBNJ4glxMbLSzCblBGJsfopBvHNhmecvsgz8JALUGWuAADHl/BibgEhFP1KTeXZnzLNzUFGoFPHbMVQJeWVFizBlQT5Y5fp2p3UbouulQ+49Q//NrtVGbnXJl3iFTf9ddXnbTAAAAAElFTkSuQmCC"} />
  </div>
                 </div>  
                 <div className="bottom-of-card">
                 <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsElEQVQoka3QMWoCURAG4HERIa1g6YacwBzDk0SblN5BL5BAxDvFOjnFFhJB+Cwisu6+1WfIX7038A0zE/GfwRD9Rq2P4TU0xbff/OADI6xPf/jCtAmfsdfOLlHbYxIRUZz8LCIGiYEeErVBRLzUcZlzj1oe63h7J/48v1CiSuyXSoXxRSvMM/GsNQd6eL8B3zoXQYFNB1yj6MS1CVYNuEQv+5x4xQGLbNRo8PQnmJMjIoY0EyR0V7kAAAAASUVORK5CYII="} />
                 </div> 
                </div> 
                <div className="oponent-cards">
                  <div className="top-of-card">
                   <div><p>4</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAAYElEQVQoka3SsQ2AIBBAUToMc1g4kQ0rMA0mjmXhJoYBPgWaoIHgEX7/Qu4OpUYFaGAHtARtpPxfsPLOtsAMXB8UgKUGJuCg3AmYEnIV8OTGvNQ1U/f2Mii7043kP6JVBFVS6LUMrztBAAAAAElFTkSuQmCC"} /></div>
                 </div>  
                 <div className="bottom-of-card">  
                  <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVQ4jb3Uuw3CMBRA0SgIZkhBwS5UFFSslBYWoqGgYBfEBpBD4whLIHDyIm7vI/nzXFX/Cg2aKFLjiBNmEaj1qh2LrHHPoAc2Q5Elrt67YVWKzHH+gPRdsCiBDl+Qvv0vZIuuAOqwy9fWRfsd0yRbS9A0h52w+PVnWPxBZlh8RBI0zdAmLP6NDOkJ8691VBGUHPgAAAAASUVORK5CYII="} />
                 </div> 
                </div>  
                <div className="oponent-cards">
                  <div className="top-of-card">
                   <div><p>3</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAAAYElEQVQoka3SsQ2AIBBAUToMc1g4kQ0rMA0mjmXhJoYBPgWaoIHgEX7/Qu4OpUYFaGAHtARtpPxfsPLOtsAMXB8UgKUGJuCg3AmYEnIV8OTGvNQ1U/f2Mii7043kP6JVBFVS6LUMrztBAAAAAElFTkSuQmCC"} /></div>
                 </div>  
                 <div className="bottom-of-card">  
                   <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVQ4jb3Uuw3CMBRA0SgIZkhBwS5UFFSslBYWoqGgYBfEBpBD4whLIHDyIm7vI/nzXFX/Cg2aKFLjiBNmEaj1qh2LrHHPoAc2Q5Elrt67YVWKzHH+gPRdsCiBDl+Qvv0vZIuuAOqwy9fWRfsd0yRbS9A0h52w+PVnWPxBZlh8RBI0zdAmLP6NDOkJ8691VBGUHPgAAAAASUVORK5CYII="} />
                 </div> 
                </div> 
                 <div className="oponent-cards">
                   <div className="top-of-card">
                   <div><p>2</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAdUlEQVQYlY2PMQrCUBAFZ/8NvEFyNBEPkD6dBNJ4glxMbLSzCblBGJsfopBvHNhmecvsgz8JALUGWuAADHl/BibgEhFP1KTeXZnzLNzUFGoFPHbMVQJeWVFizBlQT5Y5fp2p3UbouulQ+49Q//NrtVGbnXJl3iFTf9ddXnbTAAAAAElFTkSuQmCC"} /></div>
                 </div>  
                 <div className="bottom-of-card">  
                 <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsElEQVQoka3QMWoCURAG4HERIa1g6YacwBzDk0SblN5BL5BAxDvFOjnFFhJB+Cwisu6+1WfIX7038A0zE/GfwRD9Rq2P4TU0xbff/OADI6xPf/jCtAmfsdfOLlHbYxIRUZz8LCIGiYEeErVBRLzUcZlzj1oe63h7J/48v1CiSuyXSoXxRSvMM/GsNQd6eL8B3zoXQYFNB1yj6MS1CVYNuEQv+5x4xQGLbNRo8PQnmJMjIoY0EyR0V7kAAAAASUVORK5CYII="} />
                 </div> 
                </div> 
              </div>
            </div>  
            <div className="poker-table-grid-cell">
              <h4 id="player-2">Vincent202</h4>
              <p>$2.88</p>
            </div> 
            
            <div className="poker-table-grid-cell">
              <div className="oponents-cards-container">
                 <div className="oponent-cards">
                   <div className="top-of-card">
                   <div><p>5</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAdUlEQVQYlY2PMQrCUBAFZ/8NvEFyNBEPkD6dBNJ4glxMbLSzCblBGJsfopBvHNhmecvsgz8JALUGWuAADHl/BibgEhFP1KTeXZnzLNzUFGoFPHbMVQJeWVFizBlQT5Y5fp2p3UbouulQ+49Q//NrtVGbnXJl3iFTf9ddXnbTAAAAAElFTkSuQmCC"} />
  </div>
                 </div>  
                 <div className="bottom-of-card">
                 <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsElEQVQoka3QMWoCURAG4HERIa1g6YacwBzDk0SblN5BL5BAxDvFOjnFFhJB+Cwisu6+1WfIX7038A0zE/GfwRD9Rq2P4TU0xbff/OADI6xPf/jCtAmfsdfOLlHbYxIRUZz8LCIGiYEeErVBRLzUcZlzj1oe63h7J/48v1CiSuyXSoXxRSvMM/GsNQd6eL8B3zoXQYFNB1yj6MS1CVYNuEQv+5x4xQGLbNRo8PQnmJMjIoY0EyR0V7kAAAAASUVORK5CYII="} />
                 </div> 
                </div> 
                 <div className="oponent-cards">
                   <div className="top-of-card">
                   <div><p>5</p></div>
                   <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAdUlEQVQYlY2PMQrCUBAFZ/8NvEFyNBEPkD6dBNJ4glxMbLSzCblBGJsfopBvHNhmecvsgz8JALUGWuAADHl/BibgEhFP1KTeXZnzLNzUFGoFPHbMVQJeWVFizBlQT5Y5fp2p3UbouulQ+49Q//NrtVGbnXJl3iFTf9ddXnbTAAAAAElFTkSuQmCC"} />
  </div>
                 </div>  
                 <div className="bottom-of-card">
                 <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsElEQVQoka3QMWoCURAG4HERIa1g6YacwBzDk0SblN5BL5BAxDvFOjnFFhJB+Cwisu6+1WfIX7038A0zE/GfwRD9Rq2P4TU0xbff/OADI6xPf/jCtAmfsdfOLlHbYxIRUZz8LCIGiYEeErVBRLzUcZlzj1oe63h7J/48v1CiSuyXSoXxRSvMM/GsNQd6eL8B3zoXQYFNB1yj6MS1CVYNuEQv+5x4xQGLbNRo8PQnmJMjIoY0EyR0V7kAAAAASUVORK5CYII="} />
                 </div> 
                </div>  
              </div>
            </div> 
            
          </div>
        </div>   
        
    </div>
   </div>

    
  </section>
    </>
  );
}

export default Game;
