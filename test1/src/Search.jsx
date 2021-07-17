import React from "react";

class Search extends React.Component {
    state = {};

    render(){
        return(
            <div>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                    />
                </div>
            </div>
        )
    }
}

export default Search;