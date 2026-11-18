export const myname = "Jorge Adalberto Díaz Valdés"
export const actionFab = "FAB"

export var tabTeacher = {tabname: "teachers", 
                         fieldname:{f1:"TEAC_ID", f2:"TEAC_NAME", f3:"TEAC_CATEGORY", f4:"TEAC_HIRED"},
                         records:[
                          {id:"60", name:"John Wood", cat:"XYZ", reg:"01/01/1905"},
                          {id:"88", name:"George Dan", cat:"", reg:""}]}

export const constDB = {
    title: "Database",
    hd1: "DB Fundamentals",
    hd2: "Design DB",
    hd3: "Management & Admin. DB",    
    hd1_sect1: "SQL",
    hd2_sect1: "ETL",
    topicagre: "Agreggation",
    topicdman: 'Data Manipulation',
    topicnqry: "Nested queries",
    topicarco: "Column arithmetic",
    topicjoin: "Joins",
    topicsets: "Sets",
    topic_etl: "Pentaho BI",
};  

export var arrobtree = [{otopic: {topic: constDB.topicagre, route: '', bckgd: true}},
                        {otopic: {topic: constDB.topicdman, route: 'dmani', bckgd: false}},
                        {otopic: {topic: constDB.topicnqry, route: 'nesq', bckgd: false}},
                        {otopic: {topic: constDB.topicarco, route: 'colari', bckgd: false}},
                        {otopic: {topic: constDB.topicjoin, route: 'join', bckgd: false}},
                        {otopic: {topic: constDB.topicsets, route: 'sets', bckgd: false}}]  
export var tree_etl = [{otopic: {topic: constDB.topic_etl, route: 'etl', bckgd: true}},]  
                        
export const contProg = {
  title: "programming",
};  

export const contSws = {
    title: "Testing",    
    hd1: "Level", 
    hd2: "Tools",
    hd3: "ISTQB",
    hd1_sect1: "Acceptance criteria",
    hd2_sect1: "Automation",        
    topicNonF: "Non Functional",
    topicistq: "ISTQB",
    topicfunc: "Functional",
    topicsele: "Selenium",
    topicplwx: "Playwright",
  };

export var arrobtree_tsting = [
                              {otopic: {topic: contSws.topicfunc, route: '', bckgd: true}},
                              {otopic: {topic: contSws.topicNonF, route: 'nfun', bckgd: false}},]
                           // {otopic: {topic: contSws.topicistq, route: 'istqb', bckgd: false}}        

export var arrobtree_tools = [{otopic: {topic: contSws.topicsele, route: 'sele', bckgd: false}},
                              {otopic: {topic: contSws.topicplwx, route: 'plwt', bckgd: false}},] 


export const contSys = {
  title: "system admin",
};  