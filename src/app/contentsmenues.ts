export const myname = "Jorge Adalberto Díaz Valdés"

export const contDB = {
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

export var arrobtree = [{otopic: {topic: contDB.topicagre, route: '', bckgd: true}},
                        {otopic: {topic: contDB.topicdman, route: 'dmani', bckgd: false}},
                        {otopic: {topic: contDB.topicnqry, route: 'nesq', bckgd: false}},
                        {otopic: {topic: contDB.topicarco, route: 'colari', bckgd: false}},
                        {otopic: {topic: contDB.topicjoin, route: 'join', bckgd: false}},
                        {otopic: {topic: contDB.topicsets, route: 'sets', bckgd: false}}]  
export var tree_etl = [{otopic: {topic: contDB.topic_etl, route: 'etl', bckgd: true}},]  
                        
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