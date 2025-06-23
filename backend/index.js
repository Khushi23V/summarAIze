const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/summarize",async (req,res)=>{
    const {text,mode}=req.body;

    if (!text || !mode){
        return res.status(400).json({error: "Text and mode required"});
    }

    const prompt=`Summarize the following text in a ${mode} tone: ${text}`;

    try{
        const response=await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[
                {role:"system",content:"You are a smart and accurate summarizer"},
                {role:"user",content:prompt},
            ],
            temperature:0.7,
        });

        const summary = response.choices[0].message.content;
        
        res.json({summary});
    }catch(error){
        console.error("Full error object:", error);
        res.status(500).json({error: "Failed to generate summary"});
    }
});

const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server is up and running at port ${PORT}`);
});