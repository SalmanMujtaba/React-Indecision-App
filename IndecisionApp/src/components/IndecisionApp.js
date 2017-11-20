import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.handPick = this.handPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.deleteSingleItem = this.deleteSingleItem.bind(this);
        this.state = {
        options : []
        };
    }
    deleteSingleItem(item){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> item!==option)
        }));
    }
    removeAll(){
        this.setState(()=>({options:[]}));
    }
    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item"
        }
        else if(this.state.options.indexOf(option)>-1){
            return "Duplicate value"
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }
    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem('options'));
                if(options){
                    this.setState(()=>({options}));
                }
        }
        catch(e){
            
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    handPick(){
        alert(this.state.options[0]);
    }
    render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
        <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOption={this.state.options.length>0} handlePick={this.handPick}/>
        <Options options={this.state.options}
           removeOptions={this.removeAll}
           deleteSingleItem={this.deleteSingleItem} 
           />
        <AddOption handleAddOption={this.handleAddOption}/>
        </div>
    );
  }
}

