
import Add from "@material-ui/icons/Add";
const buttonPropTypes = {
    myLibrary: {
      buttonVisiable: true,
      buttonText: "Add to Library",
      buttonClassName: "button1",
      startIcon: <Add />,
      linearBarVisible: false,
      linearBarValue: 0
    },
    finished: {
      buttonVisiable: true,
      buttonText: "Read Again",
      buttonClassName: "button2",
      startIcon: null,
      linearBarVisible: true,
      linearBarValue: 100
    },
    reading:{
      buttonVisiable: true,
      buttonText: "Finished",
      buttonClassName: "button2",
      startIcon: null,
      linearBarVisible: true,
      linearBarValue: 30,
    },
    exploreReading:{
      buttonVisiable: false,
      buttonText: "",
      buttonClassName: "",
      startIcon: null,
      linearBarVisible: true,
      linearBarValue: 30,
    },
    exploreFinished:{
      buttonVisiable: false,
      buttonText: "Finished",
      buttonClassName: "button2",
      startIcon: null,
      linearBarVisible: true,
      linearBarValue: 100,
    }
  }

  const typeOfCard= "exploreFinished";
  let data = buttonPropTypes[typeOfCard]