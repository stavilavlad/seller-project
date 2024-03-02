import { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";

// const ImagesGrid = () => {
//   const [file, setFile] = useState([]);

//   function displayImage(e) {
//     try {
//       const len = e.target.files.length;
//       console.log(len);
//       console.log(file.length);
//       console.log(e.target.files);

//       for (let i = 0; i < len; i++) {
//         setFile((prevFile) => {
//           const files = [...prevFile];
//           files.push(URL.createObjectURL(e.target.files[i]));
//           return files;
//         });
//       }
//       console.log(file);
//     } catch (error) {}
//   }

//   function handleDelete(index) {
//     setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   }

//   return (
//     <div className="bg-base-200 mb-8 p-4 rounded-lg flex flex-col">
//       <h2 className="text-primary font-semibold text-2xl pt-3">Add Images</h2>
//       {/* ADD IMAGES */}
//       <div className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[60%] gap-4 my-4">
//         <div>
//           <label className="btn bg-base-300 w-full h-48 sm:h-36 flex items-center justify-center rounded-md p-0">
//             <BiImageAdd className="w-6 h-6" />

//             <input type="file" name="image1" multiple onChange={displayImage} accept="image/*" className=" hidden"></input>
//           </label>
//         </div>

//         {/* IMAGES ARRAY */}
//         {file.map((item, index) => {
//           console.log(index);
//           return (
//             <>
//               <div>
//                 <label key={index} className="btn bg-base-300 w-full h-48 sm:h-36 flex items-center justify-center rounded-md p-0">
//                   <img src={item} alt={item} className="w-full h-full object-cover rounded-md" />
//                 </label>

//                 <button type="button" className="btn btn-xs btn-primary w-full" onClick={() => handleDelete(index)}>
//                   <IoTrashOutline />
//                 </button>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImagesGrid;

const ImagesGridInput = ({ text }) => {
  const [files, setFiles] = useState(Array.from({ length: 4 }, () => null));

  const displayImage = (index, e) => {
    try {
      const url = URL.createObjectURL(e.target.files[0]);
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = url;
        return updatedFiles;
      });
    } catch (error) {}
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index] = null;
      return updatedFiles;
    });
    const fileInput = document.querySelector(`input[name="image${index + 1}"]`);
    if (fileInput) {
      fileInput.value = null;
    }
  };

  return (
    <div className="bg-base-200 mb-8 p-4 rounded-lg flex flex-col">
      <h2 className="text-primary font-semibold text-2xl pt-3">Add Images</h2>
      <p className="text-sm text-slate-400">{text}</p>
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[60%] gap-4 my-4">
        {files.map((file, index) => (
          <div key={index}>
            <label className="btn bg-base-300 w-full h-48 sm:h-36 flex items-center justify-center rounded-md p-0">
              {file ? (
                <>
                  <img src={file} alt={file} className="w-full h-full object-cover rounded-md" />
                </>
              ) : (
                <BiImageAdd className="w-6 h-6" />
              )}
              <input type="file" name={"file"} onChange={(e) => displayImage(index, e)} accept="image/*" className="hidden"></input>
            </label>

            {file ? (
              <button type="button" className="btn btn-xs btn-primary w-full" onClick={() => handleDelete(index)}>
                <IoTrashOutline />
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesGridInput;
