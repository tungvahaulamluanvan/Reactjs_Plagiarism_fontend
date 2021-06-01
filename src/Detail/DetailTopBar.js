import React from 'react';
function DetailTopBar(){
    return(
        <div>
            <div class="topbar">
        <div className = "function-button">
            <button>Filter</button>
                <button>Sort</button>
                <button>Re-write</button>
            </div>
            <div class="similiar-parameter">
                <div className="similiar-number">
                    <h2>80%</h2>
                    <p>Similiar</p>
                </div>
                <div className ="similiar-20">
                    <h2>10</h2>
                    <p>Out of 20</p>
                </div>
                </div>
        </div>
        </div>
    )
}
export default DetailTopBar;