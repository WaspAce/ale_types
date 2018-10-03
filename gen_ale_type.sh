#!/bin/bash

RED='\033[0;31m'
NC='\033[0m' # No Color
ALE_TYPE_NAME=$1;
DIR_NAME=$(echo $ALE_TYPE_NAME | sed -r 's/([a-z0-9])([A-Z])/\1_\L\2/g');
DIR_NAME=$( echo "$DIR_NAME" | tr '[:upper:]' '[:lower:]' );
TYPE_TYPE="class";
ALE_PATH="./ale_types/${DIR_NAME}"

if [[ $1 == "" ]]
then
    echo -e "${RED}Имя, сестра!${NC}"
    exit 0
fi

if [ -d "$ALE_PATH" ]
then
    echo -e "${RED} класс ${ALE_TYPE_NAME} уже описан, сестра!${NC}"
    exit 0
fi


if [[ $2 != "" ]]
then
  TYPE_TYPE=$2
fi

mkdir "${ALE_PATH}"

echo "declare $TYPE_TYPE $1 {" >> ./ale_types/$DIR_NAME/"$DIR_NAME".d.ts
echo "}" >> ./ale_types/$DIR_NAME/"$DIR_NAME".d.ts

echo "/// <reference path=\"./$DIR_NAME.d.ts\" />" >> ./ale_types/$DIR_NAME/"$DIR_NAME".t.ts
echo "import test from '../../test';" >> ./ale_types/$DIR_NAME/"$DIR_NAME".t.ts
echo "test('$ALE_TYPE_NAME', $ALE_TYPE_NAME);" >> ./ale_types/$DIR_NAME/"$DIR_NAME".t.ts

echo "import './ale_types/$DIR_NAME/$DIR_NAME.t';" >> ./index.ts