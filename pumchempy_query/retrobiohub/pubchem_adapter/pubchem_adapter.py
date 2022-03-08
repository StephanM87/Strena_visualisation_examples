import pubchempy as pcp
import urllib

import requests


class PubchemAdapter:
    '''
        This class is used to query pubchem
    
    '''

    def pubchem_connector(self, query):

        '''
            Builds the Get request needed to query pubchem
        
        '''

        
        base = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/'
        test_smiles = 'C(C1C=CC=C1)1C=CC=C1'
        request = requests.get(base+test_smiles)
        print(request.content)

        return request



    
    def get_IUPAC_form_smiles(self, smiles):
        '''
            This function is used to query pubchem via pubchempy with a SMILES code and retrieve a IUPAC name
        ----------
        args:
            SMILES: String; the SMILES code of the structure to be queried
        ----------
        return:
            IUPAC: String;  IUPAC name of the structure queried

        '''
        try:

            p = pcp.get_compounds(smiles, 'smiles')
            for i in p:                
                if i.iupac_name != None and i.iupac_name !="" and isinstance(i.iupac_name, str):
                    mc = i.molecular_formula
                    synonyms = i.synonyms
                    print(synonyms)
                    inchi = i.inchi

                    description = {"mc": i.molecular_formula,
                                    "name":i.synonyms[0],
                                    "inchi":i.inchi}
                    print(description)

                    return description
                
                return i.iupac_name
        except pcp.BadRequestError as err :
            return "Smiles code can't be identified"

#new = PubchemAdapter()
#iupac = new.get_IUPAC_form_smiles('C(C1C=CC=C1)1C=CC=C1')
            

