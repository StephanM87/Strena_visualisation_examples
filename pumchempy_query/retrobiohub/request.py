'''
This route handles the requests send by retrobiocat and distributes it
'''


from flask_restx import Resource, Namespace, Model, fields
from flask import request


import json

from retrobiohub.pubchem_adapter.pubchem_adapter import PubchemAdapter


ns = Namespace("Request Handler", description="Routes handling Requests from Retrobiocat")


class RequestHandler(Resource):
    '''
    Test Instance this class will be removed in the near future
    '''
    def post(self):
        
        payload = request.data
        payload_string = json.loads(payload.decode("utf-8"))
        print("der Payload ist", payload_string["smiles"])

        query = PubchemAdapter()
        response = query.get_IUPAC_form_smiles(payload_string["smiles"])

        print(response)

        res = json.dumps({"payload":response})
        return res

ns.add_resource(RequestHandler, "/")

