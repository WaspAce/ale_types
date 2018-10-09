
if [ -e ./index.ts ]
then
    rm ./index.ts
fi

for d in ./ale_types/*/ ; do
    A="$(cut -d'/' -f3 <<<"$d")"
    echo "import '$d$A.t';" >> ./index.ts
done
