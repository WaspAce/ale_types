#!/bin/bash
if [[ $ALEPATH == "" ]]
then
    echo -e "${RED}ERROR: Ale path (ALEPTAH) not set!${NC}"
    exit 1
fi

if [[ $ALETESTPATH == "" ]]
then
    echo -e "${RED}ERROR: Ale test path (ALETESTPTAH) not set!${NC}"
    exit 1
fi

cd $ALEPATH
./ale --source=$ALETESTPATH
