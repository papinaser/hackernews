import React,{Component} from "react";
import {ThemeProvider} from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Switch  from "react-switch"
import List from "../List";
import {colorsDark,colorsLight} from "../../styles/palette"
import {Wrapper,Title} from "./styles";
import Loader from "../Loader";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            lightTheme:false,
        }
    }
    componentDidMount() {
        this.props.fetchStoriesFirstPage();
    }
    fetchStories=()=>{
      const {storyIds,page,fetchStories,isFetching}=this.props;
      if (!isFetching){
          fetchStories({storyIds,page});
      }
    };
    handelSwitchTheme=(checked)=>{
        this.setState({
            lightTheme:checked
        });
    };
    render() {
        const {stories,hasMoreStories} = this.props;
        return(
            <ThemeProvider theme={this.state.lightTheme?colorsLight:colorsDark}>
              <div>
                <Wrapper>
                  <Title>Header News Reader</Title>
                    <p>
                        Theme : {this.state.lightTheme?'Light':'Dark'}
                        <Switch
                            checked={this.state.lightTheme}
                            height={20}
                            width={48}
                            onChange={this.handelSwitchTheme}
                        />
                    </p>
                    <InfiniteScroll
                        dataLength={stories.length}
                        next={this.fetchStories}
                        hasMore={hasMoreStories}
                        loader={<Loader/>}
                        style={{
                            height:"100%",
                            overflow:"visible"
                        }}
                    >
                        <List stories={stories}/>
                    </InfiniteScroll>

                </Wrapper>
              </div>
            </ThemeProvider>
        );
  }
}

export default App;
