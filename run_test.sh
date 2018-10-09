#!/bin/bash
if [[ $ALEPATH == "" ]]
then
    echo -e "${RED}ERROR: Ale path not set!${NC}"
    exit 1
fi

if [[ $ALETESTPATH == "" ]]
then
    ALETESTPATH="./index.js"
fi

cd $ALEPATH
./ale --source=$ALETESTPATH
