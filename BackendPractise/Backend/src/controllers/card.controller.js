import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {CardDetail} from "../models/card.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";









// Get all cards
// exports.getCards = async (req, res) => {
//     try {
//         const cards = await CardDetail.find();
//         res.json(cards);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };




// Create a new card
const createCard = asyncHandler(async(req, res) => {
    const { tag,  title, location, description, total_price, get_price, security_type, investment_multiple, maturity, min_investment } = req.body;

console.log("tag name is :",tag);
console.log("The request body is",req.body);


if(
    [tag,title].some((field)=>
    field?.trim()==="")
 )
 {
    throw new ApiError(400,"All fields are required")
 }


 const Card=await CardDetail.create({
    tag,
    // card_image,
    title,
    location,
    description,
    total_price,
    get_price,
    security_type,
    investment_multiple,
    maturity,
    min_investment
 })


const createCard=await Card.save();

if(!createCard){
    throw new ApiError(500,"Something went wrong create a card");
}


return res.status(201).json(
    new ApiResponse(200,createCard,"Card is successfully created.")
)
});







// // Update a card
// exports.updateCard = async (req, res) => {
//     try {
//         const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedCard);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Delete a card
// exports.deleteCard = async (req, res) => {
//     try {
//         await card.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Card deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


export {createCard}