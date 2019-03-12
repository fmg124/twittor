

// Gardar en el cahe dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {


    if( res.ok ) {

        return caches.open( dynamicCache ).then ( Cache => {

            caches.put( req, res.clone() );

            return res.clone();

        });

    }else{
        return res;
    }



}