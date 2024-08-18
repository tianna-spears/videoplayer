/* eslint-disable react/prop-types */
function Video(props) {
    return (
      <div>
        <video src= {props.src} controls autoPlay muted/>
      </div>
    );
};

export default Video;